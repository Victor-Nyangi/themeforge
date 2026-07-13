import { ExternalLink, Moon, Sun } from 'lucide-react';
import { readableOn } from '../utils/palettePresets';

const FRAUNCES = 'Fraunces, Georgia, serif';

// External links — replace with your own URLs.
const GITHUB_URL = 'https://github.com/Victor-Nyangi';
const PORTFOLIO_URL = 'https://victor-nyangi-personal-portfolio.vercel.app/';

type View = 'theme-designer' | 'variants';

const NAV_ITEMS: { label: string; view: View }[] = [
  { label: 'Theme Designer', view: 'theme-designer' },
  { label: 'Variants', view: 'variants' },
];

// The mark is the signature: the logo itself is a tiny palette, echoing the
// emerald / violet / amber accents used across the theme presets.
function PaletteMark({ ring }: { ring: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[30px] w-[30px] shrink-0 overflow-hidden rounded-[9px] shadow-sm"
      style={{ boxShadow: `inset 0 0 0 1px ${ring}` }}
    >
      <span className="h-full flex-1" style={{ backgroundColor: '#1FAA6B' }} />
      <span className="h-full flex-1" style={{ backgroundColor: '#7C3AED' }} />
      <span className="h-full flex-1" style={{ backgroundColor: '#FFE94A' }} />
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

interface GlobalNavDesktopProps {
  /** Header background — follows the active theme's primary color. */
  bg?: string;
  activeView?: View;
  onViewChange?: (view: View) => void;
  isDark?: boolean;
  onToggleDark?: () => void;
}

export default function GlobalNavDesktop({
  bg = '#6948ac',
  activeView = 'theme-designer',
  onViewChange,
  isDark = false,
  onToggleDark,
}: GlobalNavDesktopProps) {
  // Flip the whole foreground to dark on bright backgrounds (e.g. Neon's
  // spring green) so text and chrome stay readable on any palette.
  const fg = readableOn(bg);
  const rgb = fg === '#FFFFFF' ? '255, 255, 255' : '10, 10, 12';
  const alpha = (a: number) => `rgba(${rgb}, ${a})`;

  return (
    <header
      className="size-full transition-colors duration-300"
      data-name="Global Nav | Desktop"
      style={{ backgroundColor: bg, borderBottom: `1px solid ${alpha(0.15)}` }}
    >
      <div className="flex h-full items-center justify-between px-[28px]">
        {/* Brand + section nav */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <PaletteMark ring={alpha(0.3)} />
            <span
              className="text-[19px] font-semibold leading-none tracking-[-0.01em]"
              style={{ fontFamily: FRAUNCES, color: fg }}
            >
              ThemeForge
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = item.view === activeView;
              return (
                <button
                  key={item.view}
                  type="button"
                  onClick={() => onViewChange?.(item.view)}
                  aria-current={active ? 'page' : undefined}
                  className="rounded-md px-3 py-1.5 text-[14px] transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  style={
                    active
                      ? { backgroundColor: alpha(0.16), color: fg, fontWeight: 600 }
                      : { color: alpha(0.65), fontWeight: 500 }
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* External links */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{ color: fg }}
          >
            {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors hover:bg-white/10"
            style={{ color: alpha(0.8) }}
          >
            Portfolio
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-white/10"
            style={{ color: fg }}
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
