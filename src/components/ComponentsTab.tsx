import { useState } from 'react';
import { Theme } from '../App';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { ChevronRight, Eye } from 'lucide-react';
import { ColorSelect } from './ColorSelect';
import { resolveColor } from '../utils/colorResolver';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ComponentsTabProps {
  theme: Theme;
  updateTheme: (path: string, value: string) => void;
}

type ComponentType = 'button' | 'tab' | 'sidebar' | 'header' | 'card' | 'input' | 'label' | 'alert' | 'badge' | 'dropdown' | 'pill';

const componentsList: Array<{ id: ComponentType; name: string; description: string }> = [
  { id: 'button', name: 'Button', description: 'Primary action buttons with multiple size variants' },
  { id: 'tab', name: 'Tab', description: 'Navigation tabs for switching between views' },
  { id: 'sidebar', name: 'Sidebar', description: 'Side navigation component' },
  { id: 'header', name: 'Header', description: 'Top navigation and branding area' },
  { id: 'card', name: 'Card', description: 'Container for grouping related content' },
  { id: 'input', name: 'Input', description: 'Text input fields for forms' },
  { id: 'label', name: 'Label', description: 'Form field labels with consistent styling' },
  { id: 'alert', name: 'Alert', description: 'Notification messages with multiple variants' },
  { id: 'badge', name: 'Badge', description: 'Status indicators and tags' },
  { id: 'dropdown', name: 'Dropdown', description: 'Select dropdown component for choosing options' },
  { id: 'pill', name: 'Pill', description: 'Rounded tag components for categories and filters' },
];

export function ComponentsTab({ theme, updateTheme }: ComponentsTabProps) {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);
  const [selectedButtonVariant, setSelectedButtonVariant] = useState<'primary' | 'success' | 'warning' | 'danger' | 'basic'>('primary');

  const renderComponentConfig = () => {
    if (!selectedComponent || !theme.components) return null;

    switch (selectedComponent) {
      case 'button':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[rgb(105,72,172)] hover:text-[#404040] mb-[14px] mt-[16px] mr-[0px] ml-[0px]"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-xl text-[#1a1a1a] dark:text-neutral-100 mb-1" style={{ fontWeight: 500 }}>Button Component</h3>
              <p className="text-sm text-[#737373]" style={{ fontWeight: 400 }}>Configure button styles, size variants, and color variants</p>
            </div>

            {/* General Button Properties */}
            <div className="space-y-3">
              <h4 className="text-sm text-[#1a1a1a] dark:text-neutral-100" style={{ fontWeight: 500 }}>General Properties</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.button.fontWeight}
                    onChange={(e) => updateTheme('components.button.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Family</Label>
                  <Input
                    type="text"
                    value={theme.components.button.fontFamily}
                    onChange={(e) => updateTheme('components.button.fontFamily', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Button Variants */}
            <div className="space-y-4">
              <h4 className="text-sm text-[#1a1a1a] dark:text-neutral-100" style={{ fontWeight: 500 }}>Button Variants</h4>
              
              <div className="space-y-2">
                <Label className="text-xs">Select Variant</Label>
                <Select value={selectedButtonVariant} onValueChange={(value) => setSelectedButtonVariant(value as 'primary' | 'success' | 'warning' | 'danger' | 'basic')}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="danger">Danger</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {(() => {
                const variant = selectedButtonVariant;
                return (
                <div key={variant} className="p-5 border border-[#e5e5e5] rounded-lg bg-card space-y-4">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm text-[#1a1a1a] dark:text-neutral-100 capitalize" style={{ fontWeight: 500 }}>{variant}</h5>
                    <div className="flex gap-3">
                      <button
                        style={{
                          fontFamily: theme.components.button.fontFamily,
                          fontWeight: theme.components.button.fontWeight,
                          fontSize: theme.components.button.sizes.md.fontSize,
                          padding: theme.components.button.sizes.md.padding,
                          borderRadius: theme.components.button.sizes.md.borderRadius,
                          minHeight: theme.components.button.sizes.md.minHeight,
                          backgroundColor: resolveColor(theme.components.button.variants[variant].backgroundColor, theme),
                          color: resolveColor(theme.components.button.variants[variant].textColor, theme),
                        }}
                        className="transition-colors"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = resolveColor(theme.components.button.variants[variant].hoverBackgroundColor, theme);
                          e.currentTarget.style.color = resolveColor(theme.components.button.variants[variant].hoverTextColor, theme);
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = resolveColor(theme.components.button.variants[variant].backgroundColor, theme);
                          e.currentTarget.style.color = resolveColor(theme.components.button.variants[variant].textColor, theme);
                        }}
                      >
                        Filled
                      </button>
                      <button
                        style={{
                          fontFamily: theme.components.button.fontFamily,
                          fontWeight: theme.components.button.fontWeight,
                          fontSize: theme.components.button.sizes.md.fontSize,
                          padding: theme.components.button.sizes.md.padding,
                          borderRadius: theme.components.button.sizes.md.borderRadius,
                          minHeight: theme.components.button.sizes.md.minHeight,
                          backgroundColor: 'transparent',
                          color: resolveColor(theme.components.button.outlineVariants[variant].textColor, theme),
                          border: `1px solid ${resolveColor(theme.components.button.outlineVariants[variant].borderColor, theme)}`,
                        }}
                        className="transition-all"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = resolveColor(theme.components.button.outlineVariants[variant].hoverBackgroundColor, theme);
                          e.currentTarget.style.color = resolveColor(theme.components.button.outlineVariants[variant].hoverTextColor, theme);
                          e.currentTarget.style.borderColor = resolveColor(theme.components.button.outlineVariants[variant].hoverBorderColor, theme);
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = resolveColor(theme.components.button.outlineVariants[variant].textColor, theme);
                          e.currentTarget.style.borderColor = resolveColor(theme.components.button.outlineVariants[variant].borderColor, theme);
                        }}
                      >
                        Outline
                      </button>
                    </div>
                  </div>

                  {/* Filled Variant Config */}
                  <div className="space-y-3 p-4 bg-muted rounded-md">
                    <p className="text-xs text-[#737373] uppercase tracking-wider" style={{ fontWeight: 500 }}>Filled Style</p>
                    <div className="grid grid-cols-2 gap-3">
                      <ColorSelect
                        label="Background Color"
                        value={theme.components.button.variants[variant].backgroundColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.backgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Text Color"
                        value={theme.components.button.variants[variant].textColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.textColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Hover Background"
                        value={theme.components.button.variants[variant].hoverBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.hoverBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Hover Text Color"
                        value={theme.components.button.variants[variant].hoverTextColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.hoverTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Focus Background"
                        value={theme.components.button.variants[variant].focusBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.focusBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Focus Text Color"
                        value={theme.components.button.variants[variant].focusTextColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.focusTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Selected Background"
                        value={theme.components.button.variants[variant].selectedBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.selectedBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Selected Text Color"
                        value={theme.components.button.variants[variant].selectedTextColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.selectedTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Disabled Background"
                        value={theme.components.button.variants[variant].disabledBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.disabledBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Disabled Text Color"
                        value={theme.components.button.variants[variant].disabledTextColor}
                        onChange={(value) => updateTheme(`components.button.variants.${variant}.disabledTextColor`, value)}
                        theme={theme}
                      />
                    </div>
                  </div>

                  {/* Outline Variant Config */}
                  <div className="space-y-3 p-4 bg-muted rounded-md">
                    <p className="text-xs text-[#737373] uppercase tracking-wider" style={{ fontWeight: 500 }}>Outline Style</p>
                    <div className="grid grid-cols-2 gap-3">
                      <ColorSelect
                        label="Border Color"
                        value={theme.components.button.outlineVariants[variant].borderColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.borderColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Text Color"
                        value={theme.components.button.outlineVariants[variant].textColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.textColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Hover Background"
                        value={theme.components.button.outlineVariants[variant].hoverBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.hoverBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Hover Text Color"
                        value={theme.components.button.outlineVariants[variant].hoverTextColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.hoverTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Hover Border Color"
                        value={theme.components.button.outlineVariants[variant].hoverBorderColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.hoverBorderColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Focus Border Color"
                        value={theme.components.button.outlineVariants[variant].focusBorderColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.focusBorderColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Focus Text Color"
                        value={theme.components.button.outlineVariants[variant].focusTextColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.focusTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Selected Border Color"
                        value={theme.components.button.outlineVariants[variant].selectedBorderColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.selectedBorderColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Selected Background"
                        value={theme.components.button.outlineVariants[variant].selectedBackgroundColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.selectedBackgroundColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Selected Text Color"
                        value={theme.components.button.outlineVariants[variant].selectedTextColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.selectedTextColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Disabled Border Color"
                        value={theme.components.button.outlineVariants[variant].disabledBorderColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.disabledBorderColor`, value)}
                        theme={theme}
                      />
                      <ColorSelect
                        label="Disabled Text Color"
                        value={theme.components.button.outlineVariants[variant].disabledTextColor}
                        onChange={(value) => updateTheme(`components.button.outlineVariants.${variant}.disabledTextColor`, value)}
                        theme={theme}
                      />
                    </div>
                  </div>
                </div>
              );
              })()}
            </div>

            {/* Size Variants */}
            <div className="space-y-4">
              <h4 className="text-sm text-[#1a1a1a] dark:text-neutral-100" style={{ fontWeight: 500 }}>Size Variants</h4>
              
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <div key={size} className="p-4 border border-[#e5e5e5] rounded-lg bg-muted space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm text-[#1a1a1a] dark:text-neutral-100 uppercase" style={{ fontWeight: 500 }}>{size}</h5>
                    <button
                      style={{
                        fontFamily: theme.components.button.fontFamily,
                        fontWeight: theme.components.button.fontWeight,
                        fontSize: theme.components.button.sizes[size].fontSize,
                        padding: theme.components.button.sizes[size].padding,
                        borderRadius: theme.components.button.sizes[size].borderRadius,
                        minHeight: theme.components.button.sizes[size].minHeight,
                      }}
                      className="bg-[#1a1a1a] text-white hover:bg-[#404040] transition-colors"
                    >
                      Button {size.toUpperCase()}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Font Size</Label>
                      <Input
                        type="text"
                        value={theme.components.button.sizes[size].fontSize}
                        onChange={(e) => updateTheme(`components.button.sizes.${size}.fontSize`, e.target.value)}
                        className="text-xs h-8"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Padding</Label>
                      <Input
                        type="text"
                        value={theme.components.button.sizes[size].padding}
                        onChange={(e) => updateTheme(`components.button.sizes.${size}.padding`, e.target.value)}
                        className="text-xs h-8"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Border Radius</Label>
                      <Input
                        type="text"
                        value={theme.components.button.sizes[size].borderRadius}
                        onChange={(e) => updateTheme(`components.button.sizes.${size}.borderRadius`, e.target.value)}
                        className="text-xs h-8"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Min Height</Label>
                      <Input
                        type="text"
                        value={theme.components.button.sizes[size].minHeight}
                        onChange={(e) => updateTheme(`components.button.sizes.${size}.minHeight`, e.target.value)}
                        className="text-xs h-8"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tab':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Tab Component</h3>
              <p className="text-sm text-muted-foreground">Configure tab navigation styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.tab.fontSize}
                    onChange={(e) => updateTheme('components.tab.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.tab.fontWeight}
                    onChange={(e) => updateTheme('components.tab.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.tab.padding}
                    onChange={(e) => updateTheme('components.tab.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Width</Label>
                  <Input
                    type="text"
                    value={theme.components.tab.borderWidth}
                    onChange={(e) => updateTheme('components.tab.borderWidth', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Active Color"
                  value={theme.components.tab.activeColor}
                  onChange={(value) => updateTheme('components.tab.activeColor', value)}
                  theme={theme}
                />
                <ColorSelect
                  label="Inactive Color"
                  value={theme.components.tab.inactiveColor}
                  onChange={(value) => updateTheme('components.tab.inactiveColor', value)}
                  theme={theme}
                />
              </div>
            </div>

            {/* Preview */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground mb-3">Preview</p>
              <div className="flex gap-2 border-b">
                <button
                  style={{
                    fontSize: theme.components.tab.fontSize,
                    fontWeight: theme.components.tab.fontWeight,
                    padding: theme.components.tab.padding,
                    borderBottom: `${theme.components.tab.borderWidth} solid ${resolveColor(theme.components.tab.activeColor, theme)}`,
                    color: resolveColor(theme.components.tab.activeColor, theme),
                  }}
                >
                  Active Tab
                </button>
                <button
                  style={{
                    fontSize: theme.components.tab.fontSize,
                    fontWeight: theme.components.tab.fontWeight,
                    padding: theme.components.tab.padding,
                    color: resolveColor(theme.components.tab.inactiveColor, theme),
                  }}
                >
                  Inactive Tab
                </button>
              </div>
            </div>
          </div>
        );

      case 'sidebar':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Sidebar Component</h3>
              <p className="text-sm text-muted-foreground">Configure sidebar navigation styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Width</Label>
                  <Input
                    type="text"
                    value={theme.components.sidebar.width}
                    onChange={(e) => updateTheme('components.sidebar.width', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Background Color"
                  value={theme.components.sidebar.backgroundColor}
                  onChange={(value) => updateTheme('components.sidebar.backgroundColor', value)}
                  theme={theme}
                />
                <div className="space-y-2">
                  <Label className="text-xs">Item Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.sidebar.itemPadding}
                    onChange={(e) => updateTheme('components.sidebar.itemPadding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Item Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.sidebar.itemFontSize}
                    onChange={(e) => updateTheme('components.sidebar.itemFontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Item Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.sidebar.itemFontWeight}
                    onChange={(e) => updateTheme('components.sidebar.itemFontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Active Color"
                  value={theme.components.sidebar.activeColor}
                  onChange={(value) => updateTheme('components.sidebar.activeColor', value)}
                  theme={theme}
                />
                <ColorSelect
                  label="Hover Color"
                  value={theme.components.sidebar.hoverColor}
                  onChange={(value) => updateTheme('components.sidebar.hoverColor', value)}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        );

      case 'header':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Header Component</h3>
              <p className="text-sm text-muted-foreground">Configure header navigation styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Height</Label>
                  <Input
                    type="text"
                    value={theme.components.header.height}
                    onChange={(e) => updateTheme('components.header.height', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Background Color"
                  value={theme.components.header.backgroundColor}
                  onChange={(value) => updateTheme('components.header.backgroundColor', value)}
                  theme={theme}
                />
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.header.padding}
                    onChange={(e) => updateTheme('components.header.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.header.fontSize}
                    onChange={(e) => updateTheme('components.header.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.header.fontWeight}
                    onChange={(e) => updateTheme('components.header.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Bottom Width</Label>
                  <Input
                    type="text"
                    value={theme.components.header.borderBottomWidth}
                    onChange={(e) => updateTheme('components.header.borderBottomWidth', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Border Bottom Color"
                  value={theme.components.header.borderBottomColor}
                  onChange={(value) => updateTheme('components.header.borderBottomColor', value)}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Card Component</h3>
              <p className="text-sm text-muted-foreground">Configure card container styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.card.padding}
                    onChange={(e) => updateTheme('components.card.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Radius</Label>
                  <Input
                    type="text"
                    value={theme.components.card.borderRadius}
                    onChange={(e) => updateTheme('components.card.borderRadius', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Width</Label>
                  <Input
                    type="text"
                    value={theme.components.card.borderWidth}
                    onChange={(e) => updateTheme('components.card.borderWidth', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Border Color"
                  value={theme.components.card.borderColor}
                  onChange={(value) => updateTheme('components.card.borderColor', value)}
                  theme={theme}
                />
                <ColorSelect
                  label="Background Color"
                  value={theme.components.card.backgroundColor}
                  onChange={(value) => updateTheme('components.card.backgroundColor', value)}
                  theme={theme}
                />
                <div className="space-y-2">
                  <Label className="text-xs">Shadow Size</Label>
                  <Input
                    type="text"
                    value={theme.components.card.shadowSize}
                    onChange={(e) => updateTheme('components.card.shadowSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground mb-3">Preview</p>
              <div
                style={{
                  padding: theme.components.card.padding,
                  borderRadius: theme.components.card.borderRadius,
                  border: `${theme.components.card.borderWidth} solid ${resolveColor(theme.components.card.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.card.backgroundColor, theme),
                  boxShadow: theme.components.card.shadowSize,
                }}
                className="max-w-sm"
              >
                <h4 className="font-semibold mb-2">Card Title</h4>
                <p className="text-sm text-muted-foreground">This is a preview of the card component with your configured styles.</p>
              </div>
            </div>
          </div>
        );

      case 'input':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Input Component</h3>
              <p className="text-sm text-muted-foreground">Configure input field styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.input.fontSize}
                    onChange={(e) => updateTheme('components.input.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.input.padding}
                    onChange={(e) => updateTheme('components.input.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Radius</Label>
                  <Input
                    type="text"
                    value={theme.components.input.borderRadius}
                    onChange={(e) => updateTheme('components.input.borderRadius', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Width</Label>
                  <Input
                    type="text"
                    value={theme.components.input.borderWidth}
                    onChange={(e) => updateTheme('components.input.borderWidth', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Border Color"
                  value={theme.components.input.borderColor}
                  onChange={(value) => updateTheme('components.input.borderColor', value)}
                  theme={theme}
                />
                <ColorSelect
                  label="Focus Border Color"
                  value={theme.components.input.focusBorderColor}
                  onChange={(value) => updateTheme('components.input.focusBorderColor', value)}
                  theme={theme}
                />
                <div className="space-y-2">
                  <Label className="text-xs">Height</Label>
                  <Input
                    type="text"
                    value={theme.components.input.height}
                    onChange={(e) => updateTheme('components.input.height', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground mb-3">Preview</p>
              <input
                type="text"
                placeholder="Sample input field"
                style={{
                  fontSize: theme.components.input.fontSize,
                  padding: theme.components.input.padding,
                  borderRadius: theme.components.input.borderRadius,
                  border: `${theme.components.input.borderWidth} solid ${resolveColor(theme.components.input.borderColor, theme)}`,
                  height: theme.components.input.height,
                  width: '100%',
                  maxWidth: '300px',
                }}
                className="outline-none transition-colors"
                onFocus={(e) => e.target.style.borderColor = resolveColor(theme.components?.input.focusBorderColor || '', theme)}
                onBlur={(e) => e.target.style.borderColor = resolveColor(theme.components?.input.borderColor || '', theme)}
              />
            </div>
          </div>
        );

      case 'label':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Label Component</h3>
              <p className="text-sm text-muted-foreground">Configure form field label styles</p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.label.fontSize}
                    onChange={(e) => updateTheme('components.label.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.label.fontWeight}
                    onChange={(e) => updateTheme('components.label.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <ColorSelect
                  label="Color"
                  value={theme.components.label.color}
                  onChange={(value) => updateTheme('components.label.color', value)}
                  theme={theme}
                />
                <div className="space-y-2">
                  <Label className="text-xs">Margin Bottom</Label>
                  <Input
                    type="text"
                    value={theme.components.label.marginBottom}
                    onChange={(e) => updateTheme('components.label.marginBottom', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground mb-3">Preview</p>
              <div>
                <label
                  style={{
                    fontSize: theme.components.label.fontSize,
                    fontWeight: theme.components.label.fontWeight,
                    color: resolveColor(theme.components.label.color, theme),
                    marginBottom: theme.components.label.marginBottom,
                    display: 'block',
                  }}
                >
                  Sample Label
                </label>
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full max-w-xs px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>
        );

      case 'alert':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Alert Component</h3>
              <p className="text-sm text-muted-foreground">Configure alert message styles and variants</p>
            </div>

            {/* General Properties */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">General Properties</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.alert.padding}
                    onChange={(e) => updateTheme('components.alert.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Radius</Label>
                  <Input
                    type="text"
                    value={theme.components.alert.borderRadius}
                    onChange={(e) => updateTheme('components.alert.borderRadius', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Width</Label>
                  <Input
                    type="text"
                    value={theme.components.alert.borderWidth}
                    onChange={(e) => updateTheme('components.alert.borderWidth', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.alert.fontSize}
                    onChange={(e) => updateTheme('components.alert.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.alert.fontWeight}
                    onChange={(e) => updateTheme('components.alert.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Variant Styles */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Variant Styles</h4>
              
              {(['info', 'success', 'warning', 'error'] as const).map((variant) => (
                <div key={variant} className="p-4 border rounded-lg bg-muted space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-medium capitalize">{variant}</h5>
                    <div
                      style={{
                        padding: theme.components.alert.padding,
                        borderRadius: theme.components.alert.borderRadius,
                        border: `${theme.components.alert.borderWidth} solid ${resolveColor(theme.components.alert.variants[variant].borderColor, theme)}`,
                        backgroundColor: resolveColor(theme.components.alert.variants[variant].backgroundColor, theme),
                        color: resolveColor(theme.components.alert.variants[variant].textColor, theme),
                        fontSize: theme.components.alert.fontSize,
                        fontWeight: theme.components.alert.fontWeight,
                      }}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)} alert message
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <ColorSelect
                      label="Background Color"
                      value={theme.components.alert.variants[variant].backgroundColor}
                      onChange={(value) => updateTheme(`components.alert.variants.${variant}.backgroundColor`, value)}
                      theme={theme}
                    />
                    <ColorSelect
                      label="Border Color"
                      value={theme.components.alert.variants[variant].borderColor}
                      onChange={(value) => updateTheme(`components.alert.variants.${variant}.borderColor`, value)}
                      theme={theme}
                    />
                    <ColorSelect
                      label="Text Color"
                      value={theme.components.alert.variants[variant].textColor}
                      onChange={(value) => updateTheme(`components.alert.variants.${variant}.textColor`, value)}
                      theme={theme}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'badge':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Badge Component</h3>
              <p className="text-sm text-muted-foreground">Configure badge styles and variants</p>
            </div>

            {/* General Properties */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">General Properties</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.badge.fontSize}
                    onChange={(e) => updateTheme('components.badge.fontSize', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.badge.fontWeight}
                    onChange={(e) => updateTheme('components.badge.fontWeight', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.badge.padding}
                    onChange={(e) => updateTheme('components.badge.padding', e.target.value)}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Border Radius</Label>
                  <Input
                    type="text"
                    value={theme.components.badge.borderRadius}
                    onChange={(e) => updateTheme('components.badge.borderRadius', e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Variant Styles */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Variant Styles</h4>
              
              {(['default', 'primary', 'success', 'warning', 'danger'] as const).map((variant) => (
                <div key={variant} className="p-4 border rounded-lg bg-muted space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-medium capitalize">{variant}</h5>
                    <span
                      style={{
                        fontSize: theme.components.badge.fontSize,
                        fontWeight: theme.components.badge.fontWeight,
                        padding: theme.components.badge.padding,
                        borderRadius: theme.components.badge.borderRadius,
                        backgroundColor: resolveColor(theme.components.badge.variants[variant].backgroundColor, theme),
                        color: resolveColor(theme.components.badge.variants[variant].textColor, theme),
                      }}
                    >
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <ColorSelect
                      label="Background Color"
                      value={theme.components.badge.variants[variant].backgroundColor}
                      onChange={(value) => updateTheme(`components.badge.variants.${variant}.backgroundColor`, value)}
                      theme={theme}
                    />
                    <ColorSelect
                      label="Text Color"
                      value={theme.components.badge.variants[variant].textColor}
                      onChange={(value) => updateTheme(`components.badge.variants.${variant}.textColor`, value)}
                      theme={theme}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'dropdown':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Dropdown Component</h3>
              <p className="text-sm text-muted-foreground">Configure dropdown select styles</p>
            </div>

            {/* Configuration Section */}
            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
              <div className="space-y-4">
                <ColorSelect
                  label="Border Color"
                  value={theme.components.dropdown.borderColor}
                  onChange={(value) => updateTheme('components.dropdown.borderColor', value)}
                  theme={theme}
                />

                <ColorSelect
                  label="Placeholder Text Color"
                  value={theme.components.dropdown.placeholderText}
                  onChange={(value) => updateTheme('components.dropdown.placeholderText', value)}
                  theme={theme}
                />

                <ColorSelect
                  label="Background Color"
                  value={theme.components.dropdown.backgroundColor}
                  onChange={(value) => updateTheme('components.dropdown.backgroundColor', value)}
                  theme={theme}
                />
              </div>
            </div>

            {/* Preview Section */}
            <div className="space-y-3 bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-semibold">Preview</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Sample Dropdown</label>
                  <select
                    className="w-full px-3 py-2 rounded border"
                    style={{
                      borderColor: resolveColor(theme.components.dropdown.borderColor, theme),
                      backgroundColor: resolveColor(theme.components.dropdown.backgroundColor, theme),
                      color: resolveColor(theme.components.dropdown.placeholderText, theme),
                    }}
                  >
                    <option>Select an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">With Selected Value</label>
                  <select
                    className="w-full px-3 py-2 rounded border"
                    style={{
                      borderColor: resolveColor(theme.components.dropdown.borderColor, theme),
                      backgroundColor: resolveColor(theme.components.dropdown.backgroundColor, theme),
                    }}
                    defaultValue="option2"
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pill':
        return (
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setSelectedComponent(null)}
                className="flex items-center gap-1 text-sm text-[#6948AC] hover:text-[#5a3d94] mb-4"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Components
              </button>
              <h3 className="text-lg font-semibold mb-1">Pill Component</h3>
              <p className="text-sm text-muted-foreground">Configure pill styles for tags and categories</p>
            </div>

            {/* General Properties */}
            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
              <h4 className="text-sm font-semibold mb-3">General Properties</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <Input
                    type="text"
                    value={theme.components.pill.fontSize}
                    onChange={(e) => updateTheme('components.pill.fontSize', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Font Weight</Label>
                  <Input
                    type="text"
                    value={theme.components.pill.fontWeight}
                    onChange={(e) => updateTheme('components.pill.fontWeight', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Padding</Label>
                  <Input
                    type="text"
                    value={theme.components.pill.padding}
                    onChange={(e) => updateTheme('components.pill.padding', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Border Radius</Label>
                  <Input
                    type="text"
                    value={theme.components.pill.borderRadius}
                    onChange={(e) => updateTheme('components.pill.borderRadius', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Border Width</Label>
                  <Input
                    type="text"
                    value={theme.components.pill.borderWidth}
                    onChange={(e) => updateTheme('components.pill.borderWidth', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Variants</h4>
              
              {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as const).map((variant) => (
                <div key={variant} className="bg-card p-6 rounded-lg border border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-semibold capitalize">{variant}</h5>
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block"
                        style={{
                          fontSize: theme.components.pill.fontSize,
                          fontWeight: theme.components.pill.fontWeight,
                          padding: theme.components.pill.padding,
                          borderRadius: theme.components.pill.borderRadius,
                          border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants[variant].borderColor, theme)}`,
                          backgroundColor: resolveColor(theme.components.pill.variants[variant].backgroundColor, theme),
                          color: resolveColor(theme.components.pill.variants[variant].textColor, theme),
                        }}
                      >
                        {variant}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <ColorSelect
                      label="Border Color"
                      value={theme.components.pill.variants[variant].borderColor}
                      onChange={(value) => updateTheme(`components.pill.variants.${variant}.borderColor`, value)}
                      theme={theme}
                    />
                    <ColorSelect
                      label="Text Color"
                      value={theme.components.pill.variants[variant].textColor}
                      onChange={(value) => updateTheme(`components.pill.variants.${variant}.textColor`, value)}
                      theme={theme}
                    />
                    <ColorSelect
                      label="Background Color"
                      value={theme.components.pill.variants[variant].backgroundColor}
                      onChange={(value) => updateTheme(`components.pill.variants.${variant}.backgroundColor`, value)}
                      theme={theme}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Preview Section */}
            <div className="space-y-3 bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-semibold">Preview</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">All Variants</p>
                  <div className="flex flex-wrap gap-2">
                    {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as const).map((variant) => (
                      <span
                        key={variant}
                        className="inline-block"
                        style={{
                          fontSize: theme.components.pill.fontSize,
                          fontWeight: theme.components.pill.fontWeight,
                          padding: theme.components.pill.padding,
                          borderRadius: theme.components.pill.borderRadius,
                          border: `${theme.components.pill.borderWidth} solid ${theme.components.pill.variants[variant].borderColor}`,
                          backgroundColor: theme.components.pill.variants[variant].backgroundColor,
                          color: theme.components.pill.variants[variant].textColor,
                        }}
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-3">Usage Example</p>
                  <div className="flex flex-wrap gap-2">
                    <span
                      style={{
                        fontSize: theme.components.pill.fontSize,
                        fontWeight: theme.components.pill.fontWeight,
                        padding: theme.components.pill.padding,
                        borderRadius: theme.components.pill.borderRadius,
                        border: `${theme.components.pill.borderWidth} solid ${theme.components.pill.variants.primary.borderColor}`,
                        backgroundColor: theme.components.pill.variants.primary.backgroundColor,
                        color: theme.components.pill.variants.primary.textColor,
                      }}
                    >
                      Featured
                    </span>
                    <span
                      style={{
                        fontSize: theme.components.pill.fontSize,
                        fontWeight: theme.components.pill.fontWeight,
                        padding: theme.components.pill.padding,
                        borderRadius: theme.components.pill.borderRadius,
                        border: `${theme.components.pill.borderWidth} solid ${theme.components.pill.variants.success.borderColor}`,
                        backgroundColor: theme.components.pill.variants.success.backgroundColor,
                        color: theme.components.pill.variants.success.textColor,
                      }}
                    >
                      Active
                    </span>
                    <span
                      style={{
                        fontSize: theme.components.pill.fontSize,
                        fontWeight: theme.components.pill.fontWeight,
                        padding: theme.components.pill.padding,
                        borderRadius: theme.components.pill.borderRadius,
                        border: `${theme.components.pill.borderWidth} solid ${theme.components.pill.variants.warning.borderColor}`,
                        backgroundColor: theme.components.pill.variants.warning.backgroundColor,
                        color: theme.components.pill.variants.warning.textColor,
                      }}
                    >
                      Pending
                    </span>
                    <span
                      style={{
                        fontSize: theme.components.pill.fontSize,
                        fontWeight: theme.components.pill.fontWeight,
                        padding: theme.components.pill.padding,
                        borderRadius: theme.components.pill.borderRadius,
                        border: `${theme.components.pill.borderWidth} solid ${theme.components.pill.variants.info.borderColor}`,
                        backgroundColor: theme.components.pill.variants.info.backgroundColor,
                        color: theme.components.pill.variants.info.textColor,
                      }}
                    >
                      New
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (selectedComponent) {
    return renderComponentConfig();
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-xl text-[#1a1a1a] dark:text-neutral-100 mb-2" style={{ fontWeight: 500 }}>Components</h3>
        <p className="text-sm text-[#737373]" style={{ fontWeight: 400 }}>Configure commonly used components in your design system</p>
      </div>

      <div className="space-y-2">
        {componentsList.map((component) => (
          <div
            key={component.id}
            className="flex items-center justify-between p-5 border border-[#e5e5e5] rounded-lg bg-card hover:border-[#6948AC] transition-all group"
          >
            <div className="flex-1">
              <h4 className="text-sm text-[#1a1a1a] dark:text-neutral-100 mb-1" style={{ fontWeight: 500 }}>{component.name}</h4>
              <p className="text-xs text-[#737373]" style={{ fontWeight: 400 }}>{component.description}</p>
            </div>
            <button
              onClick={() => setSelectedComponent(component.id)}
              className="flex items-center gap-2 text-sm text-[#6948AC] px-4 py-2 border border-[#6948AC] rounded-md hover:bg-[#6948AC] hover:text-white transition-all"
            >
              <Eye className="h-4 w-4" />
              <span style={{ fontWeight: 500 }}>Configure</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}