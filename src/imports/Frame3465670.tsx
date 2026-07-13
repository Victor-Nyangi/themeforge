import svgPaths from "./svg-rb3v0459t2";

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 tracking-[0.5px]">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] relative shrink-0 text-[20px] text-black w-[238px]">Users</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#4e4e4e] text-[14px] w-[min-content]">Add, deactivate and view all users.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d="M16 6V26M26 16H6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <Frame />
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">Invite User</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Button />
    </div>
  );
}

function LabelCount() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Label Count">
      <p className="font-['Fraunces',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fcfcfc] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">30</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center px-[24px] py-[12px] relative shrink-0" data-name="Tab 1">
      <div aria-hidden="true" className="absolute border-[#6948ac] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Fraunces',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6948ac] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[1.13] whitespace-pre">All</p>
      </div>
      <LabelCount />
    </div>
  );
}

function Tab1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Tab 2">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">Active</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Tab 3">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[14px] text-center text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">Inactive</p>
      </div>
    </div>
  );
}

function TabComponent() {
  return (
    <div className="content-end flex flex-wrap gap-0 items-end relative shrink-0 w-full" data-name="Tab Component">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[34.001px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Search">
          <path d={svgPaths.p20217600} id="Vector" stroke="var(--stroke-0, #353535)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SearchText() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Search Text">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative w-full">
          <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">{`Search user by  email,  ID, name or phone number...`}</p>
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-[#fcfcfc] grow h-[48px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Search Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[12px] py-[8px] relative w-full">
          <Search />
          <SearchText />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p388fa9e0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#21143b] box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fcfcfc] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">3</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame1 />
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Filters</p>
      <Frame27 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p305ba680} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame2 />
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Export</p>
    </div>
  );
}

function SearchFilterComponent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[927px]" data-name="Search Filter Component">
      <SearchBar />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[218px]">
      <Checkbox />
      <p className="font-['Fraunces',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[265px]">Name</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0.5px_0px] border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <p className="font-['Fraunces',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[155px]">Email</p>
      <p className="font-['Fraunces',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[150px]">Phone Number</p>
      <p className="font-['Fraunces',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[167px]">Last Login</p>
      <p className="font-['Fraunces',sans-serif] font-bold leading-[1.13] relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[100px]">Action</p>
    </div>
  );
}

function Check24Solid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check/ 24 / Solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Check/ 24 / Solid">
          <path d={svgPaths.p298b180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#21143b] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <Check24Solid />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Checkbox">
      <Checkbox1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[169px]">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-full">{`Mark Chege Ndung'u`}</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[213px]">
      <Checkbox2 />
      <Frame39 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex gap-[17px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame28 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[151px]">mark@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[144px]">+254 703 456 789</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[160px]">1 year, 5 months ago</p>
      <Button3 />
    </div>
  );
}

function Check24Solid1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check/ 24 / Solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Check/ 24 / Solid">
          <path d={svgPaths.p298b180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#21143b] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <Check24Solid1 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Checkbox">
      <Checkbox3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-[175px]">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Lillian Wambui Karanja</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[213px]">
      <Checkbox4 />
      <Frame40 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex gap-[17px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame29 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[151px]">lillian@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[145px]">+254 711 567 890</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[160px]">3 weeks ago</p>
      <Button4 />
    </div>
  );
}

function Check24Solid2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Check/ 24 / Solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Check/ 24 / Solid">
          <path d={svgPaths.p298b180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-[#21143b] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <Check24Solid2 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Checkbox">
      <Checkbox5 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Joshua Muriuki Kamau</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[214px]">
      <Checkbox6 />
      <Frame41 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[17px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame34 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[151px]">josh@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[144px]">+254 710 678 901</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[161px]">10 minutes ago</p>
      <Button5 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="content-stretch flex items-start relative rounded-[6px] shrink-0" data-name="Checkbox">
      <Checkbox7 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Fatima Nasir Abdi</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[214px]">
      <Checkbox8 />
      <Frame42 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[17px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame35 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[152px]">fatima@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] h-[20px] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[125px]">+254 715 789 012</p>
      <div className="flex flex-col font-['Fraunces',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[178px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`    3 weeks ago`}</p>
      </div>
      <Button6 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="content-stretch flex items-start relative rounded-[6px] shrink-0" data-name="Checkbox">
      <Checkbox9 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Samuel Mwangi Gitau</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[214px]">
      <Checkbox10 />
      <Frame43 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex gap-[17px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame36 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[153px]">samuel@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[140px]">+254 716 890 123</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[163px]">2 years ago</p>
      <Button7 />
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-[6px] shrink-0 size-[24px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="content-stretch flex items-start relative rounded-[6px] shrink-0" data-name="Checkbox">
      <Checkbox11 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">Zainab Amina Juma</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[220px]">
      <Checkbox12 />
      <Frame44 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#6948ac] box-border content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[153px]">zainab@gmail.com</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[150px]">+254 717 901 234</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111111] text-[14px] tracking-[0.5px] w-[165px]">9 months ago</p>
      <Button8 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M10.5 13L5.5 8L10.5 3" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-[7px] relative rounded-[4px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p249e8180} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#e2ddf2] box-border content-stretch flex flex-col gap-[10px] h-[42px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4f3583] text-[12px] text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px]">
        <p className="leading-[1.5] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M5.5 3L10.5 8L5.5 13" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px] shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p26e8bb40} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px] shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame8 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Frame9 />
        </div>
      </div>
      <Frame25 />
      <Frame12 />
      <Frame11 />
      <Frame13 />
      <Frame14 />
      <Frame10 />
      <Frame31 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M19.5 8.25L12 15.75L4.5 8.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[40px] items-center p-[12px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d1d4d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">25</p>
      <Frame7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[0px] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">
        <span>{`Showing `}</span>
        <span className="font-['Fraunces',sans-serif] font-bold">15</span>
        <span>{` - `}</span>
        <span className="font-['Fraunces',sans-serif] font-bold">20</span>
        <span>{` of 30`}</span>
      </p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bbbbbb] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">|</p>
      <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">{`Items per page: `}</p>
      <Frame26 />
    </div>
  );
}

function PaginationComponent() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex items-center justify-between px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[927px]" data-name="Pagination Component">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

export default function Frame15() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center p-[24px] relative size-full">
          <Frame16 />
          <TabComponent />
          <SearchFilterComponent />
          <Frame38 />
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
}