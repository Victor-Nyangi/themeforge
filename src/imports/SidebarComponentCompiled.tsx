import svgPaths from "./svg-lx665a74ar";

interface SidebarComponentCompiledProps {
  activeView?: 'theme-designer' | 'variants';
  onViewChange?: (view: 'theme-designer' | 'variants') => void;
}

function Sidebar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sidebar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sidebar">
          <path d={svgPaths.p34a72080} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SidebarIconInteraction() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-center justify-end pr-0 pl-[4px] py-[4px] relative rounded-[8px] shrink-0" data-name="Sidebar | Icon Interaction">
      <Sidebar />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-bold leading-[1.13] relative shrink-0 text-[#4e4e4e] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre" style={{ fontFamily: 'Fraunces, sans-serif' }}>Theming</p>
      <SidebarIconInteraction />
    </div>
  );
}

function HMenuTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="H. Menu Title">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[8px] pr-[4px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Selector() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center overflow-clip p-[4px] relative shrink-0" data-name="Selector">
      <div className="flex h-[16.5px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "16.5", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16.5px]" data-name="Vector">
            <div className="absolute inset-[-0.75px_-4.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
                <path d="M0.75 0.75H17.25" id="Vector" stroke="var(--stroke-0, #6948AC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Selector />
      </div>
    </div>
  );
}



function ChevronRight() {
  return (
    <div className="h-[39px] relative shrink-0 w-[23.5px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 39">
        <g id="Chevron right">
          <path d="M8 12L15.5 19.5L8 27" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

interface SidebarComponentSingleItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function SidebarComponentSingleItem({ isActive, onClick, label }: SidebarComponentSingleItemProps) {
  return (
    <div 
      className={`${isActive ? 'bg-[#efecf8]' : 'bg-transparent'} relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5] transition-colors`} 
      data-name="Sidebar Component_single item"
      onClick={onClick}
    >
      {isActive && <div aria-hidden="true" className="absolute border-[#6948ac] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[8.75px]" />}
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-0 items-center p-[4px] relative w-full">
          {isActive && <Frame />}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Search Text">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
                <p className={`leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.5px] whitespace-pre ${isActive ? 'text-[#111111]' : 'text-[#4e4e4e]'}`} style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>{label}</p>
              </div>
            </div>
          </div>
          {isActive && <ChevronRight />}
        </div>
      </div>
    </div>
  );
}

interface SidebarItemsProps {
  activeView: 'theme-designer' | 'variants';
  onViewChange: (view: 'theme-designer' | 'variants') => void;
}

function SidebarItems({ activeView, onViewChange }: SidebarItemsProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Sidebar Items">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <HMenuTitle />
      <SidebarComponentSingleItem 
        isActive={activeView === 'theme-designer'}
        onClick={() => onViewChange('theme-designer')}
        label="Theme Designer"
      />
      <SidebarComponentSingleItem 
        isActive={activeView === 'variants'}
        onClick={() => onViewChange('variants')}
        label="Variants"
      />
    </div>
  );
}

export default function SidebarComponentCompiled({
  activeView = 'theme-designer', 
  onViewChange = () => {} 
}: SidebarComponentCompiledProps) {
  return (
    <div className="bg-[#fcfcfc] relative size-full" data-name="Sidebar Component_compiled">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[8px] py-[4px] relative size-full">
          <SidebarItems activeView={activeView} onViewChange={onViewChange} />
        </div>
      </div>
    </div>
  );
}