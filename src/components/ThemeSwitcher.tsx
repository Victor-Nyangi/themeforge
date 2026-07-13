import { Theme } from '../App';
import {
  PALETTE_PRESETS,
  PRIMARY_COLORS,
  SURFACE_COLORS,
  buildThemeUpdates,
  buildPrimaryUpdates,
  buildSurfaceUpdates,
} from '../utils/palettePresets';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

interface ThemeSwitcherProps {
  theme: Theme;
  applyPreset: (updates: Record<string, string>) => void;
}

const eq = (a: string, b: string) => a?.toLowerCase() === b?.toLowerCase();

export function ThemeSwitcher({ theme, applyPreset }: ThemeSwitcherProps) {
  const activePrimary = theme.colors.primary.default;
  const activeSurface = theme.colors.basic[500];

  return (
    <div className="space-y-5 rounded-lg border bg-card p-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Theme Switcher</h4>
        <p className="text-xs text-muted-foreground">
          Start from a foundation, then tune the primary and surface colors. Changes apply live.
          Status colors (success, info, warning, danger) are left untouched.
        </p>
      </div>

      {/* Foundation */}
      <section className="space-y-2">
        <span className="block text-xs font-semibold text-muted-foreground">Foundation</span>
        <ToggleGroup
          type="single"
          value=""
          onValueChange={(id) => {
            const preset = PALETTE_PRESETS.find((p) => p.id === id);
            if (preset) applyPreset(buildThemeUpdates(preset));
          }}
          className="flex flex-wrap justify-start gap-2"
        >
          {PALETTE_PRESETS.map((preset) => (
            <ToggleGroupItem
              key={preset.id}
              value={preset.id}
              variant="outline"
              className="h-auto flex-col items-start gap-1.5 rounded-lg px-3 py-2 data-[state=on]:border-[#6948AC]"
            >
              <span className="flex gap-1">
                {preset.swatches.map((s) => (
                  <span
                    key={s.name}
                    className="h-3 w-3 rounded-full border border-black/5"
                    style={{ backgroundColor: s.hex }}
                  />
                ))}
              </span>
              <span className="text-xs font-medium">{preset.name}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </section>

      {/* Primary */}
      <section className="space-y-2">
        <span className="block text-xs font-semibold text-muted-foreground">Primary</span>
        <div className="flex flex-wrap gap-2">
          {PRIMARY_COLORS.map((color) => {
            const active = eq(activePrimary, color.hex);
            return (
              <button
                key={color.name}
                type="button"
                title={`${color.name} ${color.hex}`}
                aria-label={color.name}
                aria-pressed={active}
                onClick={() => applyPreset(buildPrimaryUpdates(color.hex))}
                className={`h-7 w-7 rounded-full border border-black/10 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6948AC] ${
                  active ? 'ring-2 ring-offset-2 ring-[#6948AC]' : ''
                }`}
                style={{ backgroundColor: color.hex }}
              />
            );
          })}
        </div>
      </section>

      {/* Surface */}
      <section className="space-y-2">
        <span className="block text-xs font-semibold text-muted-foreground">Surface</span>
        <div className="flex flex-wrap gap-2">
          {SURFACE_COLORS.map((color) => {
            const active = eq(activeSurface, color.hex);
            return (
              <button
                key={color.name}
                type="button"
                title={`${color.name} ${color.hex}`}
                aria-label={color.name}
                aria-pressed={active}
                onClick={() => applyPreset(buildSurfaceUpdates(color.hex))}
                className={`h-7 w-7 rounded-full border border-black/10 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6948AC] ${
                  active ? 'ring-2 ring-offset-2 ring-[#6948AC]' : ''
                }`}
                style={{ backgroundColor: color.hex }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
