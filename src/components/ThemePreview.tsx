import { Theme } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  AlertTriangle, 
  XCircle 
} from 'lucide-react';

interface ThemePreviewProps {
  theme: Theme;
}

export function ThemePreview({ theme }: ThemePreviewProps) {
  const ThemedButton = ({ variant, children }: { variant: keyof Theme['colors']; children: React.ReactNode }) => (
    <button
      style={{
        backgroundColor: theme.colors[variant],
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: theme.borders.radius,
        border: 'none',
        cursor: 'pointer',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.bodyWeight,
      }}
    >
      {children}
    </button>
  );

  const ThemedBadge = ({ variant, children }: { variant: keyof Theme['colors']; children: React.ReactNode }) => (
    <span
      style={{
        backgroundColor: theme.colors[variant] + '20',
        color: theme.colors[variant],
        padding: '0.25rem 0.75rem',
        borderRadius: theme.borders.radius,
        fontSize: '0.875rem',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.bodyWeight,
      }}
    >
      {children}
    </span>
  );

  const ThemedAlert = ({ 
    variant, 
    icon: Icon, 
    title, 
    description 
  }: { 
    variant: keyof Theme['colors']; 
    icon: any;
    title: string;
    description: string;
  }) => (
    <div
      style={{
        backgroundColor: theme.colors[variant] + '10',
        borderLeft: `4px solid ${theme.colors[variant]}`,
        borderRadius: theme.borders.radius,
        padding: '1rem',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Icon style={{ color: theme.colors[variant], width: '20px', height: '20px', flexShrink: 0 }} />
        <div>
          <div style={{ fontWeight: theme.typography.headingWeight, color: theme.colors[variant], marginBottom: '0.25rem' }}>
            {title}
          </div>
          <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Buttons */}
      <Card style={{ backgroundColor: theme.backgrounds.surface }}>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Status-based button styles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <ThemedButton variant="primary">Primary</ThemedButton>
            <ThemedButton variant="success">Success</ThemedButton>
            <ThemedButton variant="info">Info</ThemedButton>
            <ThemedButton variant="warning">Warning</ThemedButton>
            <ThemedButton variant="danger">Danger</ThemedButton>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card style={{ backgroundColor: theme.backgrounds.surface }}>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Status indicators and labels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <ThemedBadge variant="primary">Primary</ThemedBadge>
            <ThemedBadge variant="success">Success</ThemedBadge>
            <ThemedBadge variant="info">Info</ThemedBadge>
            <ThemedBadge variant="warning">Warning</ThemedBadge>
            <ThemedBadge variant="danger">Danger</ThemedBadge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card style={{ backgroundColor: theme.backgrounds.surface }}>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
          <CardDescription>Notification messages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ThemedAlert
            variant="primary"
            icon={AlertCircle}
            title="Primary Alert"
            description="This is a primary alert message for general information."
          />
          <ThemedAlert
            variant="success"
            icon={CheckCircle2}
            title="Success"
            description="Your changes have been saved successfully."
          />
          <ThemedAlert
            variant="info"
            icon={Info}
            title="Information"
            description="Here's some helpful information you should know about."
          />
          <ThemedAlert
            variant="warning"
            icon={AlertTriangle}
            title="Warning"
            description="Please review this warning before proceeding."
          />
          <ThemedAlert
            variant="danger"
            icon={XCircle}
            title="Error"
            description="An error occurred. Please try again."
          />
        </CardContent>
      </Card>

      {/* Cards with different surfaces */}
      <Card style={{ backgroundColor: theme.backgrounds.surface }}>
        <CardHeader>
          <CardTitle>Surface Levels</CardTitle>
          <CardDescription>Different background elevations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div 
            style={{ 
              backgroundColor: theme.backgrounds.page,
              padding: '1rem',
              borderRadius: theme.borders.radius,
              border: `${theme.borders.width} solid ${theme.borders.color}`,
            }}
          >
            <p style={{ fontFamily: theme.typography.fontFamily }}>Page Background</p>
          </div>
          <div 
            style={{ 
              backgroundColor: theme.backgrounds.surface,
              padding: '1rem',
              borderRadius: theme.borders.radius,
              border: `${theme.borders.width} solid ${theme.borders.color}`,
            }}
          >
            <p style={{ fontFamily: theme.typography.fontFamily }}>Surface Background</p>
          </div>
          <div 
            style={{ 
              backgroundColor: theme.backgrounds.elevated,
              padding: '1rem',
              borderRadius: theme.borders.radius,
              border: `${theme.borders.width} solid ${theme.borders.color}`,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p style={{ fontFamily: theme.typography.fontFamily }}>Elevated Background</p>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card style={{ backgroundColor: theme.backgrounds.surface }}>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
          <CardDescription>Font styles and hierarchy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h1 style={{ 
              fontFamily: theme.typography.fontFamily, 
              fontWeight: theme.typography.headingWeight,
              lineHeight: theme.typography.lineHeight,
            }}>
              Heading 1
            </h1>
            <h2 style={{ 
              fontFamily: theme.typography.fontFamily, 
              fontWeight: theme.typography.headingWeight,
              lineHeight: theme.typography.lineHeight,
            }}>
              Heading 2
            </h2>
            <h3 style={{ 
              fontFamily: theme.typography.fontFamily, 
              fontWeight: theme.typography.headingWeight,
              lineHeight: theme.typography.lineHeight,
            }}>
              Heading 3
            </h3>
            <p style={{ 
              fontFamily: theme.typography.fontFamily, 
              fontWeight: theme.typography.bodyWeight,
              lineHeight: theme.typography.lineHeight,
              fontSize: theme.typography.baseFontSize,
            }}>
              This is body text demonstrating the configured typography settings. 
              It uses the base font size, body weight, and line height from your theme configuration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
