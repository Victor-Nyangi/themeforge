import { Theme } from '../App';

/**
 * Resolves a color reference (like "primary.default") to an actual hex color value
 * @param colorRef - The color reference string (e.g., "primary.default", "#FF0000")
 * @param theme - The theme object containing all color swatches
 * @returns The resolved hex color value
 */
export function resolveColor(colorRef: string, theme: Theme): string {
  // If it's already a hex color or other CSS color, return it as-is
  if (colorRef.startsWith('#') || colorRef === 'transparent' || colorRef.startsWith('rgb')) {
    return colorRef;
  }

  // Parse the color reference (e.g., "primary.default")
  const parts = colorRef.split('.');
  if (parts.length !== 2) {
    // If it's not a valid reference, return as-is
    return colorRef;
  }

  const [swatchName, shadeName] = parts;
  
  // Check if the swatch exists in the theme
  const swatch = (theme.colors as any)[swatchName];
  if (!swatch) {
    console.warn(`Color swatch "${swatchName}" not found in theme`);
    return colorRef;
  }

  // Get the specific shade
  const color = swatch[shadeName];
  if (!color) {
    console.warn(`Color shade "${shadeName}" not found in swatch "${swatchName}"`);
    return colorRef;
  }

  return color;
}

/**
 * Gets all available color options for dropdown selection
 * @returns Array of color reference options with labels
 */
export function getColorOptions(): Array<{ value: string; label: string }> {
  const swatches = ['primary', 'secondary', 'basic', 'success', 'info', 'warning', 'danger'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', 
                  'default', 'focus', 'hover', 'active', 'disabled', 'foreground'];
  
  const options: Array<{ value: string; label: string }> = [];
  
  for (const swatch of swatches) {
    for (const shade of shades) {
      options.push({
        value: `${swatch}.${shade}`,
        label: `${swatch.charAt(0).toUpperCase() + swatch.slice(1)} - ${shade}`,
      });
    }
  }
  
  return options;
}
