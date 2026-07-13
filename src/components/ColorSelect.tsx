import { Theme } from '../App';
import { resolveColor, getColorOptions } from '../utils/colorResolver';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ColorSelectProps {
  value: string;
  onChange: (value: string) => void;
  theme: Theme;
  label?: string;
}

export function ColorSelect({ value, onChange, theme, label }: ColorSelectProps) {
  const colorOptions = getColorOptions();
  const resolvedColor = resolveColor(value, theme);

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-medium text-muted-foreground">{label}</label>}
      <div className="flex gap-2 items-center">
        {/* Color preview swatch */}
        <div
          className="h-9 w-12 rounded border border-border shrink-0"
          style={{ backgroundColor: resolvedColor }}
          title={resolvedColor}
        />
        
        {/* Dropdown selector */}
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {colorOptions.map((option) => {
              const optionColor = resolveColor(option.value, theme);
              return (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-4 w-4 rounded border border-border"
                      style={{ backgroundColor: optionColor }}
                    />
                    <span className="text-xs">{option.label}</span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
