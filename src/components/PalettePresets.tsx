import { useState } from 'react';
import { PALETTE_PRESETS, buildThemeUpdates } from '../utils/palettePresets';

interface PalettePresetsProps {
  onApply: (updates: Record<string, string>) => void;
}

export function PalettePresets({ onApply }: PalettePresetsProps) {
  const [appliedId, setAppliedId] = useState<string | null>(null);

  return (
    <div className="space-y-3 rounded-lg border bg-white p-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">Palette Presets</h4>
        <p className="text-xs text-gray-500">
          Apply a curated color system in one click. This replaces your Primary, Secondary and Basic
          colors along with the background and foreground tokens. Status colors (success, info,
          warning, danger) are left untouched.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PALETTE_PRESETS.map((preset) => {
          const isApplied = appliedId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => {
                onApply(buildThemeUpdates(preset));
                setAppliedId(preset.id);
              }}
              title={preset.description}
              className={`text-left rounded-lg border p-3 transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6948AC] ${
                isApplied ? 'border-[#6948AC] ring-1 ring-[#6948AC]' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">{preset.name}</span>
                {isApplied && (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#6948AC] bg-[#6948AC]/10 rounded-full px-2 py-0.5">
                    Applied
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-500 mb-3">{preset.tagline}</p>
              <div className="flex gap-1.5">
                {preset.swatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    title={`${swatch.role}: ${swatch.name} ${swatch.hex}`}
                    className="h-8 flex-1 rounded-md border border-black/5"
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
