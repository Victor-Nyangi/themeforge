import { Theme } from '../App';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Eye } from 'lucide-react';
import { resolveColor } from '../utils/colorResolver';

interface LivePreviewProps {
  theme: Theme;
}

export function LivePreview({ theme }: LivePreviewProps) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Color Swatches */}
        <div className="space-y-4">
          <h3 className="text-sm">Color Swatches</h3>
          {Object.entries(theme.colors).map(([colorName, swatches]) => (
            <div key={colorName} className="space-y-2">
              <p className="text-xs capitalize">{colorName}</p>
              <div className="grid grid-cols-10 gap-1">
                {Object.entries(swatches).map(([shade, value]) => (
                  <div
                    key={shade}
                    className="relative group"
                    title={`${colorName}-${shade}: ${value}`}
                  >
                    <div 
                      className="h-6 w-6 rounded border border-border"
                      style={{ backgroundColor: value }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white rounded">
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typography Elements */}
        <div className="space-y-4">
          <h3 className="text-sm">Typography</h3>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Heading 1</span>
              <h1 
                style={{ 
                  fontFamily: theme.typography.elements.h1.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h1.fontSize,
                  fontWeight: theme.typography.elements.h1.fontWeight,
                  lineHeight: theme.typography.elements.h1.lineHeight,
                }}
              >
                H1 Sample
              </h1>
            </div>
            
            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">Heading 2</span>
              <h2 
                style={{ 
                  fontFamily: theme.typography.elements.h2.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h2.fontSize,
                  fontWeight: theme.typography.elements.h2.fontWeight,
                  lineHeight: theme.typography.elements.h2.lineHeight,
                }}
              >
                H2 Sample
              </h2>
            </div>

            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">Heading 3</span>
              <h3 
                style={{ 
                  fontFamily: theme.typography.elements.h3.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h3.fontSize,
                  fontWeight: theme.typography.elements.h3.fontWeight,
                  lineHeight: theme.typography.elements.h3.lineHeight,
                }}
              >
                H3 Sample
              </h3>
            </div>

            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">Heading 4</span>
              <h4 
                style={{ 
                  fontFamily: theme.typography.elements.h4.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h4.fontSize,
                  fontWeight: theme.typography.elements.h4.fontWeight,
                  lineHeight: theme.typography.elements.h4.lineHeight,
                }}
              >
                H4 Sample
              </h4>
            </div>

            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">Heading 5</span>
              <h5 
                style={{ 
                  fontFamily: theme.typography.elements.h5.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h5.fontSize,
                  fontWeight: theme.typography.elements.h5.fontWeight,
                  lineHeight: theme.typography.elements.h5.lineHeight,
                }}
              >
                H5 Sample
              </h5>
            </div>

            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">Heading 6</span>
              <h6 
                style={{ 
                  fontFamily: theme.typography.elements.h6.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.h6.fontSize,
                  fontWeight: theme.typography.elements.h6.fontWeight,
                  lineHeight: theme.typography.elements.h6.lineHeight,
                }}
              >
                H6 Sample
              </h6>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1">Paragraph</span>
              <p 
                style={{ 
                  fontFamily: theme.typography.elements.p.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.p.fontSize,
                  fontWeight: theme.typography.elements.p.fontWeight,
                  lineHeight: theme.typography.elements.p.lineHeight,
                }}
              >
                This is a paragraph example showcasing the configured typography styles. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1">Label</span>
              <label 
                style={{ 
                  fontFamily: theme.typography.elements.label.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.label.fontSize,
                  fontWeight: theme.typography.elements.label.fontWeight,
                  lineHeight: theme.typography.elements.label.lineHeight,
                }}
              >
                Label Sample Text
              </label>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block mb-1">Span</span>
              <span 
                style={{ 
                  fontFamily: theme.typography.elements.span.fontFamily || theme.typography.fontFamily,
                  fontSize: theme.typography.elements.span.fontSize,
                  fontWeight: theme.typography.elements.span.fontWeight,
                  lineHeight: theme.typography.elements.span.lineHeight,
                }}
              >
                Span Sample Text
              </span>
            </div>
          </div>
        </div>

        {/* Components with colors */}
        <div className="space-y-4">
          <h3 className="text-sm">Component Examples</h3>
          
          {/* Buttons using 500 shade */}
          <div className="flex flex-wrap gap-2">
            <button
              style={{
                backgroundColor: theme.colors.primary['500'],
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'Fraunces, sans-serif'
              }}
              className="transition-opacity hover:opacity-90"
            >
              Primary
            </button>
            <button
              style={{
                backgroundColor: theme.colors.success['500'],
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'Fraunces, sans-serif'
              }}
              className="transition-opacity hover:opacity-90"
            >
              Success
            </button>
            <button
              style={{
                backgroundColor: theme.colors.danger['500'],
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'Fraunces, sans-serif'
              }}
              className="transition-opacity hover:opacity-90"
            >
              Danger
            </button>
          </div>

          {/* Alert using 100 and 700 shades */}
          <div
            style={{
              backgroundColor: theme.colors.info['100'],
              padding: theme.spacing.md,
              borderRadius: theme.borders.radius,
              borderLeft: `4px solid ${theme.colors.info['700']}`,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.elements.p.fontSize,
            }}
          >
            This is an info alert using color swatches
          </div>

          {/* Badges using different shades */}
          <div className="flex flex-wrap gap-2">
            <span
              style={{
                backgroundColor: theme.colors.success['100'],
                color: theme.colors.success['800'],
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                borderRadius: theme.borders.radius,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.elements.label.fontSize,
                fontWeight: theme.typography.elements.label.fontWeight,
              }}
            >
              Success Badge
            </span>
            <span
              style={{
                backgroundColor: theme.colors.warning['100'],
                color: theme.colors.warning['800'],
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                borderRadius: theme.borders.radius,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.elements.label.fontSize,
                fontWeight: theme.typography.elements.label.fontWeight,
              }}
            >
              Warning Badge
            </span>
          </div>

          {/* Pills using variant styles */}
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground block">Pills</span>
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.primary.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.primary.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.primary.textColor, theme),
                }}
              >
                Primary
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.secondary.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.secondary.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.secondary.textColor, theme),
                }}
              >
                Secondary
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.success.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.success.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.success.textColor, theme),
                }}
              >
                Success
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.info.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.info.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.info.textColor, theme),
                }}
              >
                Info
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.warning.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.warning.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.warning.textColor, theme),
                }}
              >
                Warning
              </span>
              <span
                className="inline-block"
                style={{
                  fontSize: theme.components.pill.fontSize,
                  fontWeight: theme.components.pill.fontWeight,
                  padding: theme.components.pill.padding,
                  borderRadius: theme.components.pill.borderRadius,
                  border: `${theme.components.pill.borderWidth} solid ${resolveColor(theme.components.pill.variants.danger.borderColor, theme)}`,
                  backgroundColor: resolveColor(theme.components.pill.variants.danger.backgroundColor, theme),
                  color: resolveColor(theme.components.pill.variants.danger.textColor, theme),
                }}
              >
                Danger
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}