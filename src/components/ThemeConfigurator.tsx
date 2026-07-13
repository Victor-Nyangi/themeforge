import { useState } from 'react';
import { Theme } from '../App';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Palette } from 'lucide-react';
import { ImageUploadField } from './ImageUploadField';
import { BasicDetailsTab } from './BasicDetailsTab';
import { ComponentsTab } from './ComponentsTab';
import { ThemeSwitcher } from './ThemeSwitcher';
import { CreateThemeDialog } from './CreateThemeDialog';

const variants = [
  { id: '1', name: 'Advantage', codeName: 'default' },
  { id: '2', name: 'Access Afya', codeName: 'accessafya' },
  { id: '3', name: 'Empower', codeName: 'empower' },
  { id: '4', name: 'Digital Public Infrastructure', codeName: 'dpi' },
  { id: '5', name: 'Uzazi Salama', codeName: 'uzazisalama' },
];

interface ThemeConfiguratorProps {
  theme: Theme;
  updateTheme: (path: string, value: string) => void;
  applyPreset?: (updates: Record<string, string>) => void;
  onThemeNameChange?: (name: string) => void;
  resetTheme: () => void;
  mode?: 'default' | 'variant';
  onSave?: () => void;
}

export function ThemeConfigurator({ theme, updateTheme, applyPreset, onThemeNameChange, resetTheme, mode = 'default', onSave }: ThemeConfiguratorProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  
  const SaveButton = () => {
    if (mode !== 'variant') return null;
    return (
      <div className="mt-6 pt-6 border-t">
        <button
          onClick={onSave}
          className="bg-[#6948ac] rounded-[8px] w-full box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative hover:bg-[#5a3d94] transition-colors"
          style={{ fontFamily: 'Fraunces, sans-serif' }}
        >
          <p className="leading-[1.5] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
            Save Changes
          </p>
        </button>
      </div>
    );
  };

  const ColorSwatchInput = ({ 
    colorName, 
    shade, 
    value 
  }: { 
    colorName: string; 
    shade: string; 
    value: string;
  }) => (
    <div className="space-y-1">
      <Label htmlFor={`${colorName}-${shade}`} className="text-xs">{shade}</Label>
      <div className="flex gap-2">
        <Input
          id={`${colorName}-${shade}`}
          type="color"
          value={value}
          onChange={(e) => updateTheme(`colors.${colorName}.${shade}`, e.target.value)}
          className="h-8 w-12 cursor-pointer p-1 rounded-none"
        />
        <Input
          type="text"
          value={value}
          onChange={(e) => updateTheme(`colors.${colorName}.${shade}`, e.target.value)}
          className="flex-1 text-xs h-8"
        />
      </div>
    </div>
  );

  const ColorSwatchSection = ({ 
    colorName, 
    label 
  }: { 
    colorName: 'primary' | 'secondary' | 'basic' | 'success' | 'info' | 'warning' | 'danger';
    label: string;
  }) => {
    const colorSwatch = theme.colors[colorName];
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const;
    const states = ['default', 'focus', 'hover', 'active', 'disabled', 'foreground'] as const;
    
    return (
      <div className="space-y-3">
        <h4 className="text-sm">{label}</h4>
        <div className="grid grid-cols-3 gap-3">
          {shades.map((shade) => (
            <ColorSwatchInput 
              key={shade}
              colorName={colorName}
              shade={shade}
              value={colorSwatch[shade]}
            />
          ))}
          {states.map((state) => (
            <ColorSwatchInput 
              key={state}
              colorName={colorName}
              shade={state}
              value={colorSwatch[state]}
            />
          ))}
        </div>
      </div>
    );
  };

  const TypographyElementConfig = ({ 
    element, 
    label 
  }: { 
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
    label: string;
  }) => {
    const elementStyles = theme.typography.elements[element];
    
    return (
      <div className="space-y-3 p-4 border rounded-lg bg-card">
        <h4 className="text-sm">{label}</h4>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor={`${element}-fontFamily`} className="text-xs">Font Family</Label>
            <Input
              id={`${element}-fontFamily`}
              type="text"
              value={elementStyles.fontFamily || theme.typography.fontFamily}
              onChange={(e) => updateTheme(`typography.elements.${element}.fontFamily`, e.target.value)}
              className="text-xs h-9"
              placeholder={theme.typography.fontFamily}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${element}-fontSize`} className="text-xs">Font Size</Label>
            <Input
              id={`${element}-fontSize`}
              type="text"
              value={elementStyles.fontSize}
              onChange={(e) => updateTheme(`typography.elements.${element}.fontSize`, e.target.value)}
              className="text-xs h-9"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${element}-fontWeight`} className="text-xs">Font Weight</Label>
            <Select 
              value={elementStyles.fontWeight}
              onValueChange={(value) => updateTheme(`typography.elements.${element}.fontWeight`, value)}
            >
              <SelectTrigger id={`${element}-fontWeight`} className="text-xs h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="300">300</SelectItem>
                <SelectItem value="400">400</SelectItem>
                <SelectItem value="500">500</SelectItem>
                <SelectItem value="600">600</SelectItem>
                <SelectItem value="700">700</SelectItem>
                <SelectItem value="800">800</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${element}-lineHeight`} className="text-xs">Line Height</Label>
            <Input
              id={`${element}-lineHeight`}
              type="text"
              value={elementStyles.lineHeight}
              onChange={(e) => updateTheme(`typography.elements.${element}.lineHeight`, e.target.value)}
              className="text-xs h-9"
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mt-4 p-4 bg-muted rounded-lg">
          {element === 'h1' && (
            <h1 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H1 Sample Text
            </h1>
          )}
          {element === 'h2' && (
            <h2 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H2 Sample Text
            </h2>
          )}
          {element === 'h3' && (
            <h3 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H3 Sample Text
            </h3>
          )}
          {element === 'h4' && (
            <h4 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H4 Sample Text
            </h4>
          )}
          {element === 'h5' && (
            <h5 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H5 Sample Text
            </h5>
          )}
          {element === 'h6' && (
            <h6 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              H6 Sample Text
            </h6>
          )}
          {element === 'p' && (
            <p 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              Paragraph Sample Text
            </p>
          )}
          {element === 'label' && (
            <label 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              Label Sample Text
            </label>
          )}
          {element === 'span' && (
            <span 
              style={{ 
                fontFamily: elementStyles.fontFamily || theme.typography.fontFamily,
                fontSize: elementStyles.fontSize,
                fontWeight: elementStyles.fontWeight,
                lineHeight: elementStyles.lineHeight,
              }}
            >
              Span Sample Text
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Theme Configuration
          </CardTitle>
          {applyPreset && (
            <CreateThemeDialog applyPreset={applyPreset} onCreate={onThemeNameChange} />
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Variant Selector Dropdown - Only show in theme-designer mode */}
        {mode === 'default' && (
          <div className="mb-6 space-y-2">
            <Label htmlFor="variant-selector" className="text-sm">Select Variant to Update</Label>
            <Select value={selectedVariant} onValueChange={setSelectedVariant}>
              <SelectTrigger id="variant-selector" className="w-full">
                <SelectValue placeholder="Choose a variant..." />
              </SelectTrigger>
              <SelectContent>
                {variants.map((variant) => (
                  <SelectItem key={variant.id} value={variant.id}>
                    {variant.name} ({variant.codeName})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        <Tabs defaultValue={mode === 'variant' ? 'basic-details' : 'colors'} className="w-full">
          <TabsList className="inline-flex h-auto w-full justify-start rounded-none border-b bg-transparent p-0 mb-6">
            {mode === 'variant' && (
              <TabsTrigger 
                value="basic-details" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
              >
                Basic Details
              </TabsTrigger>
            )}
            <TabsTrigger 
              value="colors" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
            >
              Colors
            </TabsTrigger>
            <TabsTrigger 
              value="typography" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
            >
              Typography
            </TabsTrigger>
            <TabsTrigger 
              value="borders-spacing" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
            >
              Borders & spacing
            </TabsTrigger>
            <TabsTrigger 
              value="background" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
            >
              Background
            </TabsTrigger>
            <TabsTrigger 
              value="components" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-0 border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 text-sm ring-offset-0 focus-visible:outline-none focus-visible:ring-0 shadow-none transition-all data-[state=active]:border-b-[#6948AC] data-[state=active]:text-[#6948AC] data-[state=active]:shadow-none data-[state=active]:font-semibold"
            >
              Components
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic-details" className="space-y-6 mt-0">
            <BasicDetailsTab theme={theme} updateTheme={updateTheme} />
          </TabsContent>

          <TabsContent value="colors" className="space-y-6 mt-0">
            {applyPreset && <ThemeSwitcher theme={theme} applyPreset={applyPreset} />}
            <ColorSwatchSection colorName="primary" label="Primary" />
            <ColorSwatchSection colorName="secondary" label="Secondary" />
            <ColorSwatchSection colorName="success" label="Success" />
            <ColorSwatchSection colorName="info" label="Info" />
            <ColorSwatchSection colorName="warning" label="Warning" />
            <ColorSwatchSection colorName="danger" label="Danger" />
            <ColorSwatchSection colorName="basic" label="Basic" />
          </TabsContent>

          <TabsContent value="typography" className="space-y-6 mt-0">
            <div className="space-y-3">
              <h4 className="text-sm">Default Font Family</h4>
              <Select 
                value={theme.typography.fontFamily} 
                onValueChange={(value) => updateTheme('typography.fontFamily', value)}
              >
                <SelectTrigger className="text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fraunces, system-ui, sans-serif">Fraunces</SelectItem>
                  <SelectItem value="Inter, system-ui, sans-serif">Inter</SelectItem>
                  <SelectItem value="system-ui, -apple-system, sans-serif">System UI</SelectItem>
                  <SelectItem value="Georgia, serif">Georgia</SelectItem>
                  <SelectItem value="'Courier New', monospace">Courier New</SelectItem>
                  <SelectItem value="Arial, sans-serif">Arial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <TypographyElementConfig element="h1" label="H1" />
              <TypographyElementConfig element="h2" label="H2" />
              <TypographyElementConfig element="h3" label="H3" />
              <TypographyElementConfig element="h4" label="H4" />
              <TypographyElementConfig element="h5" label="H5" />
              <TypographyElementConfig element="h6" label="H6" />
              <TypographyElementConfig element="p" label="Paragraph" />
              <TypographyElementConfig element="label" label="Label" />
              <TypographyElementConfig element="span" label="Span" />
            </div>
          </TabsContent>

          <TabsContent value="borders-spacing" className="space-y-6 mt-0">
            {/* Border Radius Section */}
            <div className="space-y-3">
              <h4 className="text-sm">Border Radius</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Sm</Label>
                  <Input
                    type="text"
                    value={theme.borders.radius.sm}
                    onChange={(e) => updateTheme('borders.radius.sm', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Md</Label>
                  <Input
                    type="text"
                    value={theme.borders.radius.md}
                    onChange={(e) => updateTheme('borders.radius.md', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Lg</Label>
                  <Input
                    type="text"
                    value={theme.borders.radius.lg}
                    onChange={(e) => updateTheme('borders.radius.lg', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Full</Label>
                  <Input
                    type="text"
                    value={theme.borders.radius.full}
                    onChange={(e) => updateTheme('borders.radius.full', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Border Width Section */}
            <div className="space-y-3">
              <h4 className="text-sm">Border Width</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Thin</Label>
                  <Input
                    type="text"
                    value={theme.borders.width.thin}
                    onChange={(e) => updateTheme('borders.width.thin', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Default</Label>
                  <Input
                    type="text"
                    value={theme.borders.width.default}
                    onChange={(e) => updateTheme('borders.width.default', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Thick</Label>
                  <Input
                    type="text"
                    value={theme.borders.width.thick}
                    onChange={(e) => updateTheme('borders.width.thick', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Border Color Section */}
            <div className="space-y-3">
              <h4 className="text-sm">Border Color</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Light</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.borders.color.light}
                      onChange={(e) => updateTheme('borders.color.light', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.borders.color.light}
                      onChange={(e) => updateTheme('borders.color.light', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Default</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.borders.color.default}
                      onChange={(e) => updateTheme('borders.color.default', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.borders.color.default}
                      onChange={(e) => updateTheme('borders.color.default', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Dark</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.borders.color.dark}
                      onChange={(e) => updateTheme('borders.color.dark', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.borders.color.dark}
                      onChange={(e) => updateTheme('borders.color.dark', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spacing Section */}
            <div className="space-y-3">
              <h4 className="text-sm">Spacing</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">XS</Label>
                  <Input
                    type="text"
                    value={theme.spacing.xs}
                    onChange={(e) => updateTheme('spacing.xs', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">SM</Label>
                  <Input
                    type="text"
                    value={theme.spacing.sm}
                    onChange={(e) => updateTheme('spacing.sm', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">MD</Label>
                  <Input
                    type="text"
                    value={theme.spacing.md}
                    onChange={(e) => updateTheme('spacing.md', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">LG</Label>
                  <Input
                    type="text"
                    value={theme.spacing.lg}
                    onChange={(e) => updateTheme('spacing.lg', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">XL</Label>
                  <Input
                    type="text"
                    value={theme.spacing.xl}
                    onChange={(e) => updateTheme('spacing.xl', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="background" className="space-y-6 mt-0">
            {/* Basic Background */}
            <div className="space-y-3">
              <h4 className="text-sm">Basic Background</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.basic.color1}
                      onChange={(e) => updateTheme('backgrounds.basic.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.basic.color1}
                      onChange={(e) => updateTheme('backgrounds.basic.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.basic.color2}
                      onChange={(e) => updateTheme('backgrounds.basic.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.basic.color2}
                      onChange={(e) => updateTheme('backgrounds.basic.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.basic.color3}
                      onChange={(e) => updateTheme('backgrounds.basic.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.basic.color3}
                      onChange={(e) => updateTheme('backgrounds.basic.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.basic.color4}
                      onChange={(e) => updateTheme('backgrounds.basic.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.basic.color4}
                      onChange={(e) => updateTheme('backgrounds.basic.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Background */}
            <div className="space-y-3">
              <h4 className="text-sm">Primary Background</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.primary.color1}
                      onChange={(e) => updateTheme('backgrounds.primary.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.primary.color1}
                      onChange={(e) => updateTheme('backgrounds.primary.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.primary.color2}
                      onChange={(e) => updateTheme('backgrounds.primary.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.primary.color2}
                      onChange={(e) => updateTheme('backgrounds.primary.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.primary.color3}
                      onChange={(e) => updateTheme('backgrounds.primary.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.primary.color3}
                      onChange={(e) => updateTheme('backgrounds.primary.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.primary.color4}
                      onChange={(e) => updateTheme('backgrounds.primary.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.primary.color4}
                      onChange={(e) => updateTheme('backgrounds.primary.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Background */}
            <div className="space-y-3">
              <h4 className="text-sm">Alternative Background</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.alternative.color1}
                      onChange={(e) => updateTheme('backgrounds.alternative.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.alternative.color1}
                      onChange={(e) => updateTheme('backgrounds.alternative.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.alternative.color2}
                      onChange={(e) => updateTheme('backgrounds.alternative.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.alternative.color2}
                      onChange={(e) => updateTheme('backgrounds.alternative.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.alternative.color3}
                      onChange={(e) => updateTheme('backgrounds.alternative.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.alternative.color3}
                      onChange={(e) => updateTheme('backgrounds.alternative.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.backgrounds.alternative.color4}
                      onChange={(e) => updateTheme('backgrounds.alternative.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.backgrounds.alternative.color4}
                      onChange={(e) => updateTheme('backgrounds.alternative.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Foreground */}
            <div className="space-y-3">
              <h4 className="text-sm">Basic Foreground</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.basic.color1}
                      onChange={(e) => updateTheme('foregrounds.basic.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.basic.color1}
                      onChange={(e) => updateTheme('foregrounds.basic.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.basic.color2}
                      onChange={(e) => updateTheme('foregrounds.basic.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.basic.color2}
                      onChange={(e) => updateTheme('foregrounds.basic.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.basic.color3}
                      onChange={(e) => updateTheme('foregrounds.basic.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.basic.color3}
                      onChange={(e) => updateTheme('foregrounds.basic.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.basic.color4}
                      onChange={(e) => updateTheme('foregrounds.basic.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.basic.color4}
                      onChange={(e) => updateTheme('foregrounds.basic.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Foreground */}
            <div className="space-y-3">
              <h4 className="text-sm">Primary Foreground</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.primary.color1}
                      onChange={(e) => updateTheme('foregrounds.primary.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.primary.color1}
                      onChange={(e) => updateTheme('foregrounds.primary.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.primary.color2}
                      onChange={(e) => updateTheme('foregrounds.primary.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.primary.color2}
                      onChange={(e) => updateTheme('foregrounds.primary.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.primary.color3}
                      onChange={(e) => updateTheme('foregrounds.primary.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.primary.color3}
                      onChange={(e) => updateTheme('foregrounds.primary.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.primary.color4}
                      onChange={(e) => updateTheme('foregrounds.primary.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.primary.color4}
                      onChange={(e) => updateTheme('foregrounds.primary.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Foreground */}
            <div className="space-y-3">
              <h4 className="text-sm">Alternative Foreground</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">color-1</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.alternative.color1}
                      onChange={(e) => updateTheme('foregrounds.alternative.color1', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.alternative.color1}
                      onChange={(e) => updateTheme('foregrounds.alternative.color1', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-2</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.alternative.color2}
                      onChange={(e) => updateTheme('foregrounds.alternative.color2', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.alternative.color2}
                      onChange={(e) => updateTheme('foregrounds.alternative.color2', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-3</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.alternative.color3}
                      onChange={(e) => updateTheme('foregrounds.alternative.color3', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.alternative.color3}
                      onChange={(e) => updateTheme('foregrounds.alternative.color3', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">color-4</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={theme.foregrounds.alternative.color4}
                      onChange={(e) => updateTheme('foregrounds.alternative.color4', e.target.value)}
                      className="h-9 w-12 cursor-pointer p-1 rounded-none"
                    />
                    <Input
                      type="text"
                      value={theme.foregrounds.alternative.color4}
                      onChange={(e) => updateTheme('foregrounds.alternative.color4', e.target.value)}
                      className="flex-1 text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="components" className="space-y-6 mt-0">
            <ComponentsTab theme={theme} updateTheme={updateTheme} />
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t space-y-3">
          <button
            onClick={mode === 'variant' ? onSave : resetTheme}
            className="bg-[#6948ac] rounded-[8px] w-full box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative hover:bg-[#5a3d94] transition-colors"
            style={{ fontFamily: 'Fraunces, sans-serif' }}
          >
            <p className="leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre" style={{ fontWeight: 600 }}>
              Save Changes
            </p>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}