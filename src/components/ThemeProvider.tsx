import { ReactNode } from 'react';
import { Theme } from '../App';

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const cssVariables: Record<string, string> = {
    '--font-family': theme.typography.fontFamily,
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--spacing-2xl': theme.spacing['2xl'],
    '--border-radius': theme.borders.radius,
    '--border-width': theme.borders.width,
    '--border-color': theme.borders.color,
  };

  // Add color swatches
  Object.entries(theme.colors).forEach(([colorName, swatches]) => {
    Object.entries(swatches).forEach(([shade, value]) => {
      cssVariables[`--color-${colorName}-${shade}`] = value;
    });
  });

  // Add typography elements
  Object.entries(theme.typography.elements).forEach(([element, styles]) => {
    cssVariables[`--${element}-font-size`] = styles.fontSize;
    cssVariables[`--${element}-font-weight`] = styles.fontWeight;
    cssVariables[`--${element}-line-height`] = styles.lineHeight;
    if (styles.fontFamily) {
      cssVariables[`--${element}-font-family`] = styles.fontFamily;
    }
  });

  return (
    <div style={cssVariables as React.CSSProperties}>
      {children}
    </div>
  );
}
