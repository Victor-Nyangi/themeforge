export default function Button() {
  return (
    <div className="bg-[#6948ac] relative rounded-[8px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Fraunces',sans-serif] leading-[1.14] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre">View</p>
        </div>
      </div>
    </div>
  );
}