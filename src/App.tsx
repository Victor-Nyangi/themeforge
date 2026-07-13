import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeConfigurator } from './components/ThemeConfigurator';
import { LivePreview } from './components/LivePreview';
import { VariantsList } from './components/VariantsList';
import GlobalNavDesktop from './imports/GlobalNavDesktop';
import Breadcrumb from './components/Breadcrumb';

export interface ColorSwatch {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
  default: string;
  focus: string;
  hover: string;
  active: string;
  disabled: string;
  foreground: string;
}

export interface TypographyElement {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  fontFamily?: string;
}

export interface ButtonSizeConfig {
  fontSize: string;
  padding: string;
  borderRadius: string;
  minHeight: string;
}

export interface ButtonVariant {
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  focusBackgroundColor: string;
  focusTextColor: string;
  selectedBackgroundColor: string;
  selectedTextColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
}

export interface ButtonOutlineVariant {
  borderColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  hoverBorderColor: string;
  focusBorderColor: string;
  focusTextColor: string;
  selectedBorderColor: string;
  selectedBackgroundColor: string;
  selectedTextColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
}

export interface ComponentButton {
  fontWeight: string;
  fontFamily: string;
  sizes: {
    xs: ButtonSizeConfig;
    sm: ButtonSizeConfig;
    md: ButtonSizeConfig;
    lg: ButtonSizeConfig;
    xl: ButtonSizeConfig;
  };
  variants: {
    primary: ButtonVariant;
    success: ButtonVariant;
    warning: ButtonVariant;
    danger: ButtonVariant;
    basic: ButtonVariant;
  };
  outlineVariants: {
    primary: ButtonOutlineVariant;
    success: ButtonOutlineVariant;
    warning: ButtonOutlineVariant;
    danger: ButtonOutlineVariant;
    basic: ButtonOutlineVariant;
  };
}

export interface ComponentTab {
  fontSize: string;
  fontWeight: string;
  padding: string;
  borderWidth: string;
  activeColor: string;
  inactiveColor: string;
}

export interface ComponentSidebar {
  width: string;
  backgroundColor: string;
  itemPadding: string;
  itemFontSize: string;
  itemFontWeight: string;
  activeColor: string;
  hoverColor: string;
}

export interface ComponentHeader {
  height: string;
  backgroundColor: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  borderBottomWidth: string;
  borderBottomColor: string;
}

export interface ComponentCard {
  padding: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  backgroundColor: string;
  shadowSize: string;
}

export interface ComponentInput {
  fontSize: string;
  padding: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
  focusBorderColor: string;
  height: string;
}

export interface ComponentLabel {
  fontSize: string;
  fontWeight: string;
  color: string;
  marginBottom: string;
}

export interface ComponentAlert {
  padding: string;
  borderRadius: string;
  borderWidth: string;
  fontSize: string;
  fontWeight: string;
  variants: {
    info: {
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    };
    success: {
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    };
    warning: {
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    };
    error: {
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    };
  };
}

export interface ComponentBadge {
  fontSize: string;
  fontWeight: string;
  padding: string;
  borderRadius: string;
  variants: {
    default: {
      backgroundColor: string;
      textColor: string;
    };
    primary: {
      backgroundColor: string;
      textColor: string;
    };
    success: {
      backgroundColor: string;
      textColor: string;
    };
    warning: {
      backgroundColor: string;
      textColor: string;
    };
    danger: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export interface ComponentDropdown {
  borderColor: string;
  placeholderText: string;
  backgroundColor: string;
}

export interface ComponentPill {
  fontSize: string;
  fontWeight: string;
  padding: string;
  borderRadius: string;
  borderWidth: string;
  variants: {
    primary: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
    secondary: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
    success: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
    info: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
    warning: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
    danger: {
      borderColor: string;
      textColor: string;
      backgroundColor: string;
    };
  };
}

export interface Theme {
  colors: {
    primary: ColorSwatch;
    secondary: ColorSwatch;
    basic: ColorSwatch;
    success: ColorSwatch;
    info: ColorSwatch;
    warning: ColorSwatch;
    danger: ColorSwatch;
  };
  typography: {
    fontFamily: string;
    elements: {
      h1: TypographyElement;
      h2: TypographyElement;
      h3: TypographyElement;
      h4: TypographyElement;
      h5: TypographyElement;
      h6: TypographyElement;
      p: TypographyElement;
      label: TypographyElement;
      span: TypographyElement;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borders: {
    radius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    width: {
      thin: string;
      default: string;
      thick: string;
    };
    color: {
      light: string;
      default: string;
      dark: string;
    };
  };
  backgrounds: {
    basic: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
    primary: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
    alternative: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  };
  foregrounds: {
    basic: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
    primary: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
    alternative: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  };
  basicDetails?: {
    images: {
      navbarLogo: string;
      mainLogo: string;
      backgroundLogo: string;
    };
    communication: {
      smsSenderId: string;
    };
  };
  components?: {
    button: ComponentButton;
    tab: ComponentTab;
    sidebar: ComponentSidebar;
    header: ComponentHeader;
    card: ComponentCard;
    input: ComponentInput;
    label: ComponentLabel;
    alert: ComponentAlert;
    badge: ComponentBadge;
    dropdown: ComponentDropdown;
    pill: ComponentPill;
  };
}

const defaultTheme: Theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
      default: '#3b82f6',
      focus: '#2563eb',
      hover: '#60a5fa',
      active: '#1d4ed8',
      disabled: '#bfdbfe',
      foreground: '#ffffff',
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
      default: '#a855f7',
      focus: '#9333ea',
      hover: '#c084fc',
      active: '#7e22ce',
      disabled: '#e9d5ff',
      foreground: '#ffffff',
    },
    basic: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
      default: '#6b7280',
      focus: '#4b5563',
      hover: '#9ca3af',
      active: '#374151',
      disabled: '#e5e7eb',
      foreground: '#ffffff',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
      default: '#10b981',
      focus: '#059669',
      hover: '#4ade80',
      active: '#047857',
      disabled: '#bbf7d0',
      foreground: '#ffffff',
    },
    info: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
      default: '#06b6d4',
      focus: '#0891b2',
      hover: '#22d3ee',
      active: '#0e7490',
      disabled: '#a5f3fc',
      foreground: '#ffffff',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
      default: '#f59e0b',
      focus: '#d97706',
      hover: '#fbbf24',
      active: '#b45309',
      disabled: '#fde68a',
      foreground: '#ffffff',
    },
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
      default: '#ef4444',
      focus: '#dc2626',
      hover: '#f87171',
      active: '#b91c1c',
      disabled: '#fecaca',
      foreground: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Fraunces, system-ui, sans-serif',
    elements: {
      h1: {
        fontSize: '2.25rem',
        fontWeight: '700',
        lineHeight: '1.2',
      },
      h2: {
        fontSize: '1.875rem',
        fontWeight: '700',
        lineHeight: '1.3',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.4',
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.4',
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: '600',
        lineHeight: '1.5',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.5',
      },
      p: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.6',
      },
      label: {
        fontSize: '0.875rem',
        fontWeight: '500',
        lineHeight: '1.5',
      },
      span: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
      },
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borders: {
    radius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px',
    },
    width: {
      thin: '1px',
      default: '2px',
      thick: '4px',
    },
    color: {
      light: '#e2e8f0',
      default: '#cbd5e1',
      dark: '#94a3b8',
    },
  },
  backgrounds: {
    basic: {
      color1: '#F9FAFC',
      color2: '#ff15f9',
      color3: '#e2e8f0',
      color4: '#c4d5e1',
    },
    primary: {
      color1: '#94a3b8',
      color2: '#64748b',
      color3: '#475569',
      color4: '#334155',
    },
    alternative: {
      color1: '#f7fc23',
      color2: '#1e293b',
      color3: '#0f172a',
      color4: '#020617',
    },
  },
  foregrounds: {
    basic: {
      color1: '#020617',
      color2: '#020617',
      color3: '#020617',
      color4: '#020617',
    },
    primary: {
      color1: '#FFFFFF',
      color2: '#FFFFFF',
      color3: '#FFFFFF',
      color4: '#FFFFFF',
    },
    alternative: {
      color1: '#FFFFFF',
      color2: '#FFFFFF',
      color3: '#FFFFFF',
      color4: '#FFFFFF',
    },
  },
  basicDetails: {
    images: {
      navbarLogo: '',
      mainLogo: '',
      backgroundLogo: '',
    },
    communication: {
      smsSenderId: '',
    },
  },
  components: {
    button: {
      fontWeight: '600',
      fontFamily: 'Fraunces, sans-serif',
      sizes: {
        xs: {
          fontSize: '0.75rem',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          minHeight: '2rem',
        },
        sm: {
          fontSize: '0.875rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          minHeight: '2rem',
        },
        md: {
          fontSize: '1rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          minHeight: '2rem',
        },
        lg: {
          fontSize: '1.125rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          minHeight: '2rem',
        },
        xl: {
          fontSize: '1.25rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          minHeight: '2rem',
        },
      },
      variants: {
        primary: {
          backgroundColor: 'primary.default',
          textColor: 'primary.foreground',
          hoverBackgroundColor: 'primary.hover',
          hoverTextColor: 'primary.foreground',
          focusBackgroundColor: 'primary.focus',
          focusTextColor: 'primary.foreground',
          selectedBackgroundColor: 'primary.active',
          selectedTextColor: 'primary.foreground',
          disabledBackgroundColor: 'primary.disabled',
          disabledTextColor: 'primary.foreground',
        },
        success: {
          backgroundColor: 'success.default',
          textColor: 'success.foreground',
          hoverBackgroundColor: 'success.hover',
          hoverTextColor: 'success.foreground',
          focusBackgroundColor: 'success.focus',
          focusTextColor: 'success.foreground',
          selectedBackgroundColor: 'success.active',
          selectedTextColor: 'success.foreground',
          disabledBackgroundColor: 'success.disabled',
          disabledTextColor: 'success.foreground',
        },
        warning: {
          backgroundColor: 'warning.default',
          textColor: 'warning.foreground',
          hoverBackgroundColor: 'warning.hover',
          hoverTextColor: 'warning.foreground',
          focusBackgroundColor: 'warning.focus',
          focusTextColor: 'warning.foreground',
          selectedBackgroundColor: 'warning.active',
          selectedTextColor: 'warning.foreground',
          disabledBackgroundColor: 'warning.disabled',
          disabledTextColor: 'warning.foreground',
        },
        danger: {
          backgroundColor: 'danger.default',
          textColor: 'danger.foreground',
          hoverBackgroundColor: 'danger.hover',
          hoverTextColor: 'danger.foreground',
          focusBackgroundColor: 'danger.focus',
          focusTextColor: 'danger.foreground',
          selectedBackgroundColor: 'danger.active',
          selectedTextColor: 'danger.foreground',
          disabledBackgroundColor: 'danger.disabled',
          disabledTextColor: 'danger.foreground',
        },
        basic: {
          backgroundColor: 'basic.default',
          textColor: 'basic.foreground',
          hoverBackgroundColor: 'basic.hover',
          hoverTextColor: 'basic.foreground',
          focusBackgroundColor: 'basic.focus',
          focusTextColor: 'basic.foreground',
          selectedBackgroundColor: 'basic.active',
          selectedTextColor: 'basic.foreground',
          disabledBackgroundColor: 'basic.disabled',
          disabledTextColor: 'basic.foreground',
        },
      },
      outlineVariants: {
        primary: {
          borderColor: 'primary.default',
          textColor: 'primary.default',
          hoverBackgroundColor: 'primary.default',
          hoverTextColor: 'primary.foreground',
          hoverBorderColor: 'primary.hover',
          focusBorderColor: 'primary.focus',
          focusTextColor: 'primary.default',
          selectedBorderColor: 'primary.active',
          selectedBackgroundColor: 'primary.default',
          selectedTextColor: 'primary.foreground',
          disabledBorderColor: 'primary.disabled',
          disabledTextColor: 'primary.disabled',
        },
        success: {
          borderColor: 'success.default',
          textColor: 'success.default',
          hoverBackgroundColor: 'success.default',
          hoverTextColor: 'success.foreground',
          hoverBorderColor: 'success.hover',
          focusBorderColor: 'success.focus',
          focusTextColor: 'success.default',
          selectedBorderColor: 'success.active',
          selectedBackgroundColor: 'success.default',
          selectedTextColor: 'success.foreground',
          disabledBorderColor: 'success.disabled',
          disabledTextColor: 'success.disabled',
        },
        warning: {
          borderColor: 'warning.default',
          textColor: 'warning.default',
          hoverBackgroundColor: 'warning.default',
          hoverTextColor: 'warning.foreground',
          hoverBorderColor: 'warning.hover',
          focusBorderColor: 'warning.focus',
          focusTextColor: 'warning.default',
          selectedBorderColor: 'warning.active',
          selectedBackgroundColor: 'warning.default',
          selectedTextColor: 'warning.foreground',
          disabledBorderColor: 'warning.disabled',
          disabledTextColor: 'warning.disabled',
        },
        danger: {
          borderColor: 'danger.default',
          textColor: 'danger.default',
          hoverBackgroundColor: 'danger.default',
          hoverTextColor: 'danger.foreground',
          hoverBorderColor: 'danger.hover',
          focusBorderColor: 'danger.focus',
          focusTextColor: 'danger.default',
          selectedBorderColor: 'danger.active',
          selectedBackgroundColor: 'danger.default',
          selectedTextColor: 'danger.foreground',
          disabledBorderColor: 'danger.disabled',
          disabledTextColor: 'danger.disabled',
        },
        basic: {
          borderColor: 'basic.default',
          textColor: 'basic.default',
          hoverBackgroundColor: 'basic.default',
          hoverTextColor: 'basic.foreground',
          hoverBorderColor: 'basic.hover',
          focusBorderColor: 'basic.focus',
          focusTextColor: 'basic.default',
          selectedBorderColor: 'basic.active',
          selectedBackgroundColor: 'basic.default',
          selectedTextColor: 'basic.foreground',
          disabledBorderColor: 'basic.disabled',
          disabledTextColor: 'basic.disabled',
        },
      },
    },
    tab: {
      fontSize: '0.875rem',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderWidth: '1px',
      activeColor: 'primary.default',
      inactiveColor: 'basic.400',
    },
    sidebar: {
      width: '200px',
      backgroundColor: 'basic.800',
      itemPadding: '0.5rem 1rem',
      itemFontSize: '0.875rem',
      itemFontWeight: '500',
      activeColor: 'primary.default',
      hoverColor: 'primary.hover',
    },
    header: {
      height: '56px',
      backgroundColor: 'basic.800',
      padding: '0 1rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      borderBottomWidth: '1px',
      borderBottomColor: 'basic.700',
    },
    card: {
      padding: '1rem',
      borderRadius: '0.5rem',
      borderWidth: '1px',
      borderColor: 'basic.100',
      backgroundColor: 'primary.foreground',
      shadowSize: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    input: {
      fontSize: '0.875rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      borderWidth: '1px',
      borderColor: 'basic.700',
      focusBorderColor: 'primary.default',
      height: '2rem',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'basic.500',
      marginBottom: '0.5rem',
    },
    alert: {
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      borderWidth: '1px',
      fontSize: '0.875rem',
      fontWeight: '500',
      variants: {
        info: {
          backgroundColor: 'info.50',
          borderColor: 'info.400',
          textColor: 'info.default',
        },
        success: {
          backgroundColor: 'success.50',
          borderColor: 'success.400',
          textColor: 'success.default',
        },
        warning: {
          backgroundColor: 'warning.50',
          borderColor: 'warning.400',
          textColor: 'warning.default',
        },
        error: {
          backgroundColor: 'danger.50',
          borderColor: 'danger.400',
          textColor: 'danger.default',
        },
      },
    },
    badge: {
      fontSize: '0.75rem',
      fontWeight: '500',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      variants: {
        default: {
          backgroundColor: 'basic.200',
          textColor: 'basic.500',
        },
        primary: {
          backgroundColor: 'primary.default',
          textColor: 'primary.foreground',
        },
        success: {
          backgroundColor: 'success.default',
          textColor: 'success.foreground',
        },
        warning: {
          backgroundColor: 'warning.default',
          textColor: 'warning.foreground',
        },
        danger: {
          backgroundColor: 'danger.default',
          textColor: 'danger.foreground',
        },
      },
    },
    dropdown: {
      borderColor: 'basic.700',
      placeholderText: 'basic.500',
      backgroundColor: 'basic.800',
    },
    pill: {
      fontSize: '0.75rem',
      fontWeight: '500',
      padding: '0.375rem 0.875rem',
      borderRadius: '9999px',
      borderWidth: '1.5px',
      variants: {
        primary: {
          borderColor: 'primary.default',
          textColor: 'primary.default',
          backgroundColor: 'transparent',
        },
        secondary: {
          borderColor: 'secondary.default',
          textColor: 'secondary.default',
          backgroundColor: 'transparent',
        },
        success: {
          borderColor: 'success.default',
          textColor: 'success.default',
          backgroundColor: 'transparent',
        },
        info: {
          borderColor: 'info.default',
          textColor: 'info.default',
          backgroundColor: 'transparent',
        },
        warning: {
          borderColor: 'warning.default',
          textColor: 'warning.default',
          backgroundColor: 'transparent',
        },
        danger: {
          borderColor: 'danger.default',
          textColor: 'danger.default',
          backgroundColor: 'transparent',
        },
      },
    },
  },
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [themeName, setThemeName] = useState('');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('themeforge-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('themeforge-dark', String(isDark));
  }, [isDark]);
  const [activeView, setActiveView] = useState<'theme-designer' | 'variants' | 'variant-detail'>('theme-designer');
  const [selectedVariant, setSelectedVariant] = useState<{ id: string; name: string; codeName: string } | null>(null);

  const updateTheme = (path: string, value: string) => {
    setTheme((prev) => {
      const keys = path.split('.');
      const newTheme = JSON.parse(JSON.stringify(prev));
      let current: any = newTheme;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newTheme;
    });
  };

  const applyPreset = (updates: Record<string, string>) => {
    setTheme((prev) => {
      const newTheme = JSON.parse(JSON.stringify(prev));
      for (const [path, value] of Object.entries(updates)) {
        const keys = path.split('.');
        let current: any = newTheme;
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
      }
      return newTheme;
    });
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  const handleViewVariant = (variant: { id: string; name: string; codeName: string }) => {
    setSelectedVariant(variant);
    setActiveView('variant-detail');
    // Load the variant's theme configuration here
    // For now, we'll use the default theme
    setTheme(defaultTheme);
  };

  const handleSaveVariant = () => {
    // Here you would save the theme configuration for the selected variant
    console.log('Saving variant:', selectedVariant, theme);
    // Show success message or navigate back
    alert(`Changes saved for ${selectedVariant?.name}`);
  };

  const handleBackToVariants = () => {
    setActiveView('variants');
    setSelectedVariant(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <div className="h-[56px] sticky top-0 z-50">
          <GlobalNavDesktop
            bg={theme.colors.primary.default}
            activeView={activeView === 'variant-detail' ? 'variants' : activeView}
            onViewChange={(view) => {
              setActiveView(view);
              if (view !== 'variants') {
                setSelectedVariant(null);
              }
            }}
            isDark={isDark}
            onToggleDark={() => setIsDark((v) => !v)}
          />
        </div>
        <Breadcrumb />
        <div className="flex flex-1 min-h-0">
          <div className="flex-1">
            {activeView === 'theme-designer' ? (
              <div className="container mx-auto py-8 px-[5px] max-w-[1400px]">
                <div className="mb-8">
                  <h1 className="mb-2">{themeName || 'Design System Theming'}</h1>
                  <p className="text-muted-foreground">
                    Configure your design system colors, typography, and spacing tokens
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-4">
                    <ThemeConfigurator
                      theme={theme}
                      updateTheme={updateTheme}
                      applyPreset={applyPreset}
                      onThemeNameChange={setThemeName}
                      resetTheme={resetTheme}
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <LivePreview theme={theme} />
                  </div>
                </div>
              </div>
            ) : activeView === 'variants' ? (
              <div className="container mx-[64px] py-[32px] px-[5px] max-w-[1400px] my-[0px] pt-[55px] pr-[5px] pb-[32px] pl-[5px]">
                <VariantsList onViewVariant={handleViewVariant} />
              </div>
            ) : (
              <div className="container mx-auto py-8 px-[5px] max-w-[1400px]">
                <div className="mb-8">
                  <button
                    onClick={handleBackToVariants}
                    className="flex items-center gap-2 text-[#6948ac] hover:text-[#5a3d94] mb-4 text-[14px]"
                    style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back to Variants
                  </button>
                  <h1 className="mb-[8px] text-[32px] font-semibold px-[1px] py-[0px] mt-[43px] mr-[0px] ml-[0px]">{selectedVariant?.name}</h1>
                  <p className="text-muted-foreground">
                    Configure the design system for {selectedVariant?.codeName}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-4">
                    <ThemeConfigurator
                      theme={theme}
                      updateTheme={updateTheme}
                      applyPreset={applyPreset}
                      resetTheme={resetTheme}
                      mode="variant"
                      onSave={handleSaveVariant}
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <LivePreview theme={theme} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}