function Link() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="Link">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">Administration</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Link />
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

function Link1() {
  return (
    <div className="box-border content-stretch flex gap-[13px] items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="Link">
      <ChevronRight />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">Roles</p>
    </div>
  );
}

function ChevronRight1() {
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

function Link2() {
  return (
    <div className="box-border content-stretch flex gap-[13px] items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="Link">
      <ChevronRight1 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">View Role</p>
    </div>
  );
}

function ChevronRight2() {
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

function Link3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="Link">
      <p className="font-['Fraunces',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#4f3583] text-[12px] text-nowrap whitespace-pre">Overview</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <ChevronRight2 />
      <Link3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-[45px] items-center pl-0 pr-[8px] py-0 relative shrink-0">
      <Frame1 />
      <Link1 />
      <Link2 />
      <Frame2 />
    </div>
  );
}

export default function BreadcrumbNavigation() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Breadcrumb Navigation">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[4px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}