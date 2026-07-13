import { Label } from './ui/label';
import { Input } from './ui/input';
import { ImageUploadField } from './ImageUploadField';
import { Theme } from '../App';

interface BasicDetailsTabProps {
  theme: Theme;
  updateTheme: (path: string, value: string) => void;
}

export function BasicDetailsTab({ theme, updateTheme }: BasicDetailsTabProps) {
  return (
    <div className="space-y-6 mt-0">
      {/* Images Section */}
      <div className="space-y-4">
        <h4 className="text-sm">Images</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageUploadField
            label="Navbar Logo"
            value={theme.basicDetails?.images.navbarLogo || ''}
            onChange={(value) => updateTheme('basicDetails.images.navbarLogo', value)}
          />
          <ImageUploadField
            label="Main Logo"
            value={theme.basicDetails?.images.mainLogo || ''}
            onChange={(value) => updateTheme('basicDetails.images.mainLogo', value)}
          />
          <ImageUploadField
            label="Background Logo"
            value={theme.basicDetails?.images.backgroundLogo || ''}
            onChange={(value) => updateTheme('basicDetails.images.backgroundLogo', value)}
          />
        </div>
      </div>

      {/* Communication Section */}
      <div className="space-y-4">
        <h4 className="text-sm">Communication</h4>
        <div className="space-y-2">
          <Label htmlFor="smsSenderId" className="text-xs">SMS Sender ID</Label>
          <Input
            id="smsSenderId"
            type="text"
            value={theme.basicDetails?.communication.smsSenderId || ''}
            onChange={(e) => updateTheme('basicDetails.communication.smsSenderId', e.target.value)}
            placeholder="Enter SMS Sender ID"
            className="text-sm"
          />
          <p className="text-xs text-muted-foreground">
            This ID will be used for all SMS communications from this variant
          </p>
        </div>
      </div>
    </div>
  );
}
