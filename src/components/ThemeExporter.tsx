import { useState } from 'react';
import { Theme } from '../App';
import { Button } from './ui/button';
import { Copy, Download, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { hexToOklchString, hexToHslString } from '../utils/palettePresets';

interface ThemeExporterProps {
  theme: Theme;
}

type ColorFormat = 'hex' | 'oklch' | 'hsl';

export function ThemeExporter({ theme }: ThemeExporterProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [colorFormat, setColorFormat] = useState<ColorFormat>('hex');

  // Convert a hex color to the selected CSS notation. Non-hex values
  // (e.g. an rgba border color) are passed through untouched.
  const formatColor = (value: string) => {
    if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value.trim())) return value;
    if (colorFormat === 'oklch') return hexToOklchString(value);
    if (colorFormat === 'hsl') return hexToHslString(value);
    return value;
  };

  const generateCSSVariables = () => {
    let css = ':root {\n';
    
    // Colors
    css += '  /* Colors */\n';
    Object.entries(theme.colors).forEach(([colorName, swatches]) => {
      Object.entries(swatches).forEach(([shade, value]) => {
        css += `  --color-${colorName}-${shade}: ${formatColor(value)};\n`;
      });
    });
    
    // Typography
    css += '\n  /* Typography */\n';
    css += `  --font-family: ${theme.typography.fontFamily};\n`;
    Object.entries(theme.typography.elements).forEach(([element, styles]) => {
      css += `  --${element}-font-size: ${styles.fontSize};\n`;
      css += `  --${element}-font-weight: ${styles.fontWeight};\n`;
      css += `  --${element}-line-height: ${styles.lineHeight};\n`;
      if (styles.fontFamily) {
        css += `  --${element}-font-family: ${styles.fontFamily};\n`;
      }
    });
    
    // Spacing
    css += '\n  /* Spacing */\n';
    Object.entries(theme.spacing).forEach(([size, value]) => {
      css += `  --spacing-${size}: ${value};\n`;
    });
    
    // Borders
    css += '\n  /* Borders */\n';
    css += `  --border-radius: ${theme.borders.radius};\n`;
    css += `  --border-width: ${theme.borders.width};\n`;
    css += `  --border-color: ${formatColor(theme.borders.color)};\n`;
    
    css += '}';
    return css;
  };

  const generateJSON = () => {
    return JSON.stringify(theme, null, 2);
  };

  const generateTailwind = () => {
    let config = 'module.exports = {\n  theme: {\n    extend: {\n';
    
    // Colors
    config += '      colors: {\n';
    Object.entries(theme.colors).forEach(([colorName, swatches]) => {
      config += `        ${colorName}: {\n`;
      Object.entries(swatches).forEach(([shade, value]) => {
        config += `          ${shade}: '${formatColor(value)}',\n`;
      });
      config += '        },\n';
    });
    config += '      },\n';
    
    // Font family
    config += '      fontFamily: {\n';
    config += `        sans: [${theme.typography.fontFamily.split(',').map(f => `'${f.trim()}'`).join(', ')}],\n`;
    config += '      },\n';
    
    // Spacing
    config += '      spacing: {\n';
    Object.entries(theme.spacing).forEach(([size, value]) => {
      config += `        ${size}: '${value}',\n`;
    });
    config += '      },\n';
    
    // Border radius
    config += '      borderRadius: {\n';
    config += `        DEFAULT: '${theme.borders.radius}',\n`;
    config += '      },\n';
    
    config += '    },\n  },\n}';
    return config;
  };

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  const FormatToggle = () => (
    <div className="flex items-center justify-between gap-2">
      <span className="text-xs text-muted-foreground">Color format</span>
      <ToggleGroup
        type="single"
        value={colorFormat}
        onValueChange={(v) => v && setColorFormat(v as ColorFormat)}
        size="sm"
      >
        <ToggleGroupItem value="hex" className="text-xs px-3">Hex</ToggleGroupItem>
        <ToggleGroupItem value="oklch" className="text-xs px-3">OKLCH</ToggleGroupItem>
        <ToggleGroupItem value="hsl" className="text-xs px-3">HSL</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );

  const ExportSection = ({ content, format, filename }: { content: string; format: string; filename: string }) => (
    <div className="space-y-3">
      <pre className="p-3 bg-muted rounded-lg overflow-x-auto text-xs max-h-[400px]">
        <code>{content}</code>
      </pre>
      <div className="flex gap-2">
        <Button 
          onClick={() => copyToClipboard(content, format)}
          variant="outline"
          size="sm"
          className="flex-1 text-xs"
        >
          {copiedFormat === format ? (
            <>
              <Check className="mr-2 h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-3 w-3" />
              Copy
            </>
          )}
        </Button>
        <Button 
          onClick={() => downloadFile(content, filename)}
          variant="outline"
          size="sm"
          className="flex-1 text-xs"
        >
          <Download className="mr-2 h-3 w-3" />
          Download
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="w-full" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Theme
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Export Your Theme</DialogTitle>
            <DialogDescription>
              Choose your preferred format to export the design system
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="css" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="css" className="text-xs">CSS</TabsTrigger>
              <TabsTrigger value="json" className="text-xs">JSON</TabsTrigger>
              <TabsTrigger value="tailwind" className="text-xs">Tailwind</TabsTrigger>
            </TabsList>

            <TabsContent value="css" className="space-y-3 mt-4">
              <FormatToggle />
              <ExportSection
                content={generateCSSVariables()}
                format="css"
                filename="theme.css"
              />
            </TabsContent>

            <TabsContent value="json" className="space-y-3 mt-4">
              <ExportSection
                content={generateJSON()}
                format="json"
                filename="theme.json"
              />
            </TabsContent>

            <TabsContent value="tailwind" className="space-y-3 mt-4">
              <FormatToggle />
              <ExportSection
                content={generateTailwind()}
                format="tailwind"
                filename="tailwind.config.js"
              />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <Button 
        onClick={() => copyToClipboard(generateCSSVariables(), 'css-quick')}
        variant="outline" 
        className="w-full" 
        size="sm"
      >
        {copiedFormat === 'css-quick' ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Copied CSS Variables
          </>
        ) : (
          <>
            <Copy className="mr-2 h-4 w-4" />
            Copy CSS Variables
          </>
        )}
      </Button>
    </div>
  );
}
