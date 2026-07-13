import { Theme } from '../App';

/**
 * Curated color-palette presets sourced from the "Color Palette Design Systems"
 * design doc. Each preset is a 5-role system (background / surface / primary /
 * accent / neutral) that we expand into the app's full theme model — generating
 * 50–950 scales + interaction states for each semantic family and mapping the
 * roles onto the background / foreground groups.
 */

// ---------------------------------------------------------------------------
// Color math
// ---------------------------------------------------------------------------

interface RGB {
  r: number;
  g: number;
  b: number;
}
interface HSL {
  h: number;
  s: number;
  l: number;
}

function hexToRgb(hex: string): RGB {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const num = parseInt(h, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
    }
    h /= 6;
  }

  return { h, s, l };
}

function hslToRgb({ h, s, l }: HSL): RGB {
  if (s === 0) {
    const v = l * 255;
    return { r: v, g: v, b: v };
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: hue2rgb(p, q, h + 1 / 3) * 255,
    g: hue2rgb(p, q, h) * 255,
    b: hue2rgb(p, q, h - 1 / 3) * 255,
  };
}

/** Relative luminance (sRGB, 0–1). Used to pick readable foreground text. */
function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const channel = (c: number) => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Near-black or white, whichever is more readable on the given background. */
export function readableOn(hex: string): string {
  return luminance(hex) > 0.45 ? '#0A0A0C' : '#FFFFFF';
}

// Ramp built *relative* to the base color (which sits at 500): lighter shades
// interpolate toward near-white, darker shades toward near-black. Each entry is
// [interpolation target, mix amount] so the scale stays monotonic regardless of
// how light or dark the picked base color is.
const LIGHT_TARGET = 0.98;
const DARK_TARGET = 0.05;
const RAMP_STOPS: Record<string, { toward: 'light' | 'dark'; t: number }> = {
  '50': { toward: 'light', t: 0.92 },
  '100': { toward: 'light', t: 0.8 },
  '200': { toward: 'light', t: 0.62 },
  '300': { toward: 'light', t: 0.42 },
  '400': { toward: 'light', t: 0.2 },
  '500': { toward: 'light', t: 0 },
  '600': { toward: 'dark', t: 0.16 },
  '700': { toward: 'dark', t: 0.34 },
  '800': { toward: 'dark', t: 0.52 },
  '900': { toward: 'dark', t: 0.7 },
  '950': { toward: 'dark', t: 0.84 },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export interface Swatch {
  [shade: string]: string;
}

/**
 * Expand a single base color into a full 50–950 scale plus interaction states.
 * The base color is preserved exactly at shade 500 / `default`.
 */
export function generateSwatch(baseHex: string): Swatch {
  const { h, s, l: baseL } = rgbToHsl(hexToRgb(baseHex));
  const scale: Swatch = {};

  // Clamp targets to the base so ramps never invert when the base is already
  // lighter than LIGHT_TARGET or darker than DARK_TARGET (e.g. pure black).
  const lightTarget = Math.max(LIGHT_TARGET, baseL);
  const darkTarget = Math.min(DARK_TARGET, baseL);

  for (const [shade, stop] of Object.entries(RAMP_STOPS)) {
    const targetL = stop.toward === 'light' ? lightTarget : darkTarget;
    const l = lerp(baseL, targetL, stop.t);
    // Ease saturation off at the very light end so tints don't read as neon.
    let sat = s;
    if (shade === '50') sat = s * 0.65;
    else if (shade === '100') sat = s * 0.78;
    else if (shade === '200') sat = s * 0.9;
    scale[shade] = rgbToHex(hslToRgb({ h, s: sat, l }));
  }

  // Preserve the picked color exactly as the canonical mid + default state.
  scale['500'] = baseHex;

  return {
    ...scale,
    default: baseHex,
    hover: scale['400'],
    focus: scale['600'],
    active: scale['700'],
    disabled: scale['200'],
    foreground: readableOn(baseHex),
  };
}

// ---------------------------------------------------------------------------
// Preset definitions (faithful to the design doc's named roles)
// ---------------------------------------------------------------------------

export interface PaletteRoles {
  background: string;
  surface: string;
  primary: string;
  accent: string;
  neutral: string;
}

export interface PalettePreset {
  id: string;
  name: string;
  tagline: string;
  description: string;
  roles: PaletteRoles;
  /** Ordered swatches for the preview chips. */
  swatches: Array<{ role: string; name: string; hex: string }>;
}

export const PALETTE_PRESETS: PalettePreset[] = [
  {
    id: 'midnight-orchid',
    name: 'Midnight Orchid',
    tagline: 'Bold · high-contrast · tech-forward',
    description:
      'Near-black base with a vivid emerald and a saturated royal purple. Confident and modern — reads as premium software.',
    roles: {
      background: '#0A0A0C',
      surface: '#1C1C20',
      primary: '#1FAA6B',
      accent: '#6B21A8',
      neutral: '#F4F1EA',
    },
    swatches: [
      { role: 'Background', name: 'Void Black', hex: '#0A0A0C' },
      { role: 'Surface', name: 'Graphite', hex: '#1C1C20' },
      { role: 'Primary', name: 'Emerald Pulse', hex: '#1FAA6B' },
      { role: 'Accent', name: 'Royal Orchid', hex: '#6B21A8' },
      { role: 'Neutral', name: 'Bone White', hex: '#F4F1EA' },
    ],
  },
  {
    id: 'botanical-noir',
    name: 'Botanical Noir',
    tagline: 'Warm · organic · editorial',
    description:
      'Soft charcoal instead of pure black, a mossy forest green, and a dusty lilac purple. Feels handmade and calm.',
    roles: {
      background: '#1E211F',
      surface: '#1B4332',
      primary: '#3F7A5C',
      accent: '#9B7EDE',
      neutral: '#F3EFE4',
    },
    swatches: [
      { role: 'Background', name: 'Soft Charcoal', hex: '#1E211F' },
      { role: 'Surface', name: 'Deep Fern', hex: '#1B4332' },
      { role: 'Primary', name: 'Moss', hex: '#3F7A5C' },
      { role: 'Accent', name: 'Dusty Lilac', hex: '#9B7EDE' },
      { role: 'Neutral', name: 'Linen', hex: '#F3EFE4' },
    ],
  },
  {
    id: 'neon-circuit',
    name: 'Neon Circuit',
    tagline: 'High-energy · dark mode · gaming/creator',
    description:
      'True black canvas, an electric spring green, and a punchy violet. Loud and kinetic — built for dark-mode-first products.',
    roles: {
      background: '#000000',
      surface: '#111214',
      primary: '#02F5A1',
      accent: '#7C3AED',
      neutral: '#D6D6DA',
    },
    swatches: [
      { role: 'Background', name: 'True Black', hex: '#000000' },
      { role: 'Surface', name: 'Carbon', hex: '#111214' },
      { role: 'Primary', name: 'Spring Green', hex: '#02F5A1' },
      { role: 'Accent', name: 'Electric Violet', hex: '#7C3AED' },
      { role: 'Neutral', name: 'Fog', hex: '#D6D6DA' },
    ],
  },
  {
    id: 'bright-bloom',
    name: 'Bright Bloom',
    tagline: 'Warm accent · sale & alert-ready · joyful',
    description:
      'Black/green/purple core plus a bright yellow accent for urgent moments — flash sales, warnings, limited-time offers.',
    roles: {
      background: '#14201A',
      surface: '#1C2E23',
      primary: '#3FAE73',
      accent: '#7C3AED',
      neutral: '#FBF8F0',
    },
    swatches: [
      { role: 'Background', name: 'Deep Ivy', hex: '#14201A' },
      { role: 'Primary', name: 'Meadow Green', hex: '#3FAE73' },
      { role: 'Accent', name: 'Bloom Yellow', hex: '#FFE94A' },
      { role: 'Accent 2', name: 'Violet Pop', hex: '#7C3AED' },
      { role: 'Neutral', name: 'Petal White', hex: '#FBF8F0' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Named color options (PrimeNG-style Primary / Surface pickers)
// ---------------------------------------------------------------------------

export interface NamedColor {
  name: string;
  hex: string;
}

/** Primary brand ramps — one representative base color per named hue. */
export const PRIMARY_COLORS: NamedColor[] = [
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Green', hex: '#22C55E' },
  { name: 'Lime', hex: '#84CC16' },
  { name: 'Yellow', hex: '#EAB308' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Red', hex: '#EF4444' },
  { name: 'Rose', hex: '#F43F5E' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Fuchsia', hex: '#D946EF' },
  { name: 'Purple', hex: '#A855F7' },
  { name: 'Violet', hex: '#8B5CF6' },
  { name: 'Indigo', hex: '#6366F1' },
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Sky', hex: '#0EA5E9' },
  { name: 'Cyan', hex: '#06B6D4' },
  { name: 'Teal', hex: '#14B8A6' },
];

/** Surface / neutral ramps — the gray tone of the whole UI. */
export const SURFACE_COLORS: NamedColor[] = [
  { name: 'Slate', hex: '#64748B' },
  { name: 'Gray', hex: '#6B7280' },
  { name: 'Zinc', hex: '#71717A' },
  { name: 'Neutral', hex: '#737373' },
  { name: 'Stone', hex: '#78716C' },
  { name: 'Ocean', hex: '#5A6B7B' },
];

// ---------------------------------------------------------------------------
// Theme mapping
// ---------------------------------------------------------------------------

const BG_KEYS = ['color1', 'color2', 'color3', 'color4'] as const;

/** Flatten a generated swatch into `colors.{family}.{shade}` update paths. */
export function buildFamilyUpdates(
  family: keyof Theme['colors'],
  baseHex: string,
): Record<string, string> {
  const updates: Record<string, string> = {};
  for (const [shade, value] of Object.entries(generateSwatch(baseHex))) {
    updates[`colors.${family}.${shade}`] = value;
  }
  return updates;
}

/**
 * Apply a single Primary brand color: the `primary` family plus the
 * primary-tinted background group and its readable foreground.
 */
export function buildPrimaryUpdates(baseHex: string): Record<string, string> {
  const scale = generateSwatch(baseHex);
  const updates = buildFamilyUpdates('primary', baseHex);
  updates['backgrounds.primary.color1'] = scale['400'];
  updates['backgrounds.primary.color2'] = scale['500'];
  updates['backgrounds.primary.color3'] = scale['600'];
  updates['backgrounds.primary.color4'] = scale['700'];
  const fg = readableOn(baseHex);
  for (const c of BG_KEYS) {
    updates[`foregrounds.primary.${c}`] = fg;
  }
  return updates;
}

/**
 * Apply a single Surface neutral: the `basic` family (which drives the app's
 * chrome — basic.800 stays dark) plus the light page background group and its
 * readable dark text.
 */
export function buildSurfaceUpdates(baseHex: string): Record<string, string> {
  const scale = generateSwatch(baseHex);
  const updates = buildFamilyUpdates('basic', baseHex);
  updates['backgrounds.basic.color1'] = scale['50'];
  updates['backgrounds.basic.color2'] = scale['100'];
  updates['backgrounds.basic.color3'] = scale['200'];
  updates['backgrounds.basic.color4'] = scale['300'];
  const darkText = scale['950'];
  for (const c of BG_KEYS) {
    updates[`foregrounds.basic.${c}`] = darkText;
  }
  return updates;
}

/**
 * Build a flat map of `theme` dotted-paths → hex values that applies a preset.
 * Only brand colors (primary / secondary / basic) and the background /
 * foreground groups are touched; semantic status colors (success / info /
 * warning / danger) are intentionally left alone so their meaning stays stable.
 */
export function buildThemeUpdates(preset: PalettePreset): Record<string, string> {
  const { primary, accent, background, surface } = preset.roles;

  const darkScale = generateSwatch(background);
  const surfaceScale = generateSwatch(surface);

  // Primary role → primary family + primary bg/fg. Surface (dark background)
  // role → basic family + light page backgrounds + dark text.
  const updates: Record<string, string> = {
    ...buildPrimaryUpdates(primary),
    ...buildSurfaceUpdates(background),
    // Accent role (purple) → secondary family.
    ...buildFamilyUpdates('secondary', accent),
  };

  // Light page surfaces come from the palette's neutral (off-white), overriding
  // the surface-derived defaults above.
  const neutralScale = generateSwatch(preset.roles.neutral);
  updates['backgrounds.basic.color1'] = neutralScale['50'];
  updates['backgrounds.basic.color2'] = neutralScale['100'];
  updates['backgrounds.basic.color3'] = neutralScale['200'];
  updates['backgrounds.basic.color4'] = neutralScale['300'];

  // Alternative (dark) background group + white text on it.
  updates['backgrounds.alternative.color1'] = surfaceScale['700'];
  updates['backgrounds.alternative.color2'] = darkScale['800'];
  updates['backgrounds.alternative.color3'] = darkScale['900'];
  updates['backgrounds.alternative.color4'] = darkScale['950'];
  for (const c of BG_KEYS) {
    updates[`foregrounds.alternative.${c}`] = '#FFFFFF';
  }

  return updates;
}
