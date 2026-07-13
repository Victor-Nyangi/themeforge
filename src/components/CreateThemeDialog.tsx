import { useRef, useState } from 'react';
import { Plus, Upload } from 'lucide-react';
import {
  PALETTE_PRESETS,
  buildThemeUpdates,
  buildPrimaryUpdates,
  buildSurfaceUpdates,
} from '../utils/palettePresets';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface CreateThemeDialogProps {
  applyPreset: (updates: Record<string, string>) => void;
  onCreate?: (name: string) => void;
}

const HEX = /^#[0-9a-fA-F]{6}$/;

/** Flatten nested hex objects (colors/backgrounds/foregrounds) to dotted paths. */
function flatten(obj: unknown, prefix: string, out: Record<string, string>) {
  if (!obj || typeof obj !== 'object') return;
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    if (typeof value === 'string') out[`${prefix}${key}`] = value;
    else if (value && typeof value === 'object') flatten(value, `${prefix}${key}.`, out);
  }
}

/** Build theme updates from an imported JSON payload (full export or lightweight schema). */
function updatesFromImport(data: Record<string, unknown>): Record<string, string> {
  const updates: Record<string, string> = {};

  // Lightweight: base foundation first, then primary/surface overrides.
  if (typeof data.foundation === 'string') {
    const preset = PALETTE_PRESETS.find((p) => p.id === data.foundation);
    if (preset) Object.assign(updates, buildThemeUpdates(preset));
  }

  // Full theme export: flatten the color groups (these win over a foundation).
  flatten(data.colors, 'colors.', updates);
  flatten(data.backgrounds, 'backgrounds.', updates);
  flatten(data.foregrounds, 'foregrounds.', updates);

  if (typeof data.primary === 'string' && HEX.test(data.primary)) {
    Object.assign(updates, buildPrimaryUpdates(data.primary));
  }
  if (typeof data.surface === 'string' && HEX.test(data.surface)) {
    Object.assign(updates, buildSurfaceUpdates(data.surface));
  }

  return updates;
}

export function CreateThemeDialog({ applyPreset, onCreate }: CreateThemeDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [foundationId, setFoundationId] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [importName, setImportName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setName('');
    setFoundationId('');
    setImportError(null);
    setImportName(null);
  };

  const finish = (themeName: string) => {
    onCreate?.(themeName);
    setOpen(false);
    reset();
  };

  const handleCreate = () => {
    const preset = PALETTE_PRESETS.find((p) => p.id === foundationId);
    if (!preset) return;
    applyPreset(buildThemeUpdates(preset));
    finish(name.trim() || preset.name);
  };

  const handleFile = async (file: File) => {
    setImportError(null);
    setImportName(file.name);
    try {
      const data = JSON.parse(await file.text());
      const updates = updatesFromImport(data);
      if (Object.keys(updates).length === 0) {
        setImportError('No color tokens found. Expected a theme export or { foundation, primary, surface }.');
        return;
      }
      applyPreset(updates);
      finish((typeof data.name === 'string' && data.name) || name.trim() || 'Imported theme');
    } catch {
      setImportError('Could not parse the file — make sure it is valid JSON.');
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          <Plus className="mr-2 h-4 w-4" />
          Create Theme
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Theme</DialogTitle>
          <DialogDescription>
            Name your theme and start from a foundation, or import an existing theme file.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-1">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="theme-name" className="text-sm">Theme Name</Label>
            <Input
              id="theme-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Theme"
            />
          </div>

          {/* Foundation */}
          <div className="space-y-2">
            <Label className="text-sm">Foundation</Label>
            <p className="text-xs text-muted-foreground">
              Choose a built-in palette as a starting point.
            </p>
            <ToggleGroup
              type="single"
              value={foundationId}
              onValueChange={(id) => id && setFoundationId(id)}
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
            <div className="pt-1">
              <Button size="sm" className="text-xs" disabled={!foundationId} onClick={handleCreate}>
                Create
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs font-medium text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          {/* Import */}
          <div className="space-y-2">
            <Label className="text-sm">Import Theme</Label>
            <p className="text-xs text-muted-foreground">
              Upload a theme JSON exported from this tool, or a{' '}
              <code className="text-[11px]">{'{ foundation, primary, surface }'}</code> file.
            </p>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
                e.target.value = '';
              }}
            />
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs" onClick={() => fileRef.current?.click()}>
                <Upload className="mr-2 h-4 w-4" />
                Choose file
              </Button>
              <span className="text-xs text-muted-foreground truncate">
                {importName ?? 'No file chosen'}
              </span>
            </div>
            {importError && <p className="text-xs text-red-600 dark:text-red-400">{importError}</p>}
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" size="sm" className="text-xs">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
