import svgPaths from "../imports/svg-rb3v0459t2";
import { useState } from 'react';
import { Pagination } from './Pagination';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button as ShadcnButton } from './ui/button';

interface Variant {
  id: string;
  name: string;
  codeName: string;
}

const mockVariants: Variant[] = [
  { id: '1', name: 'Advantage', codeName: 'default' },
  { id: '2', name: 'Access Afya', codeName: 'accessafya' },
  { id: '3', name: 'Empower', codeName: 'empower' },
  { id: '4', name: 'Digital Public Infrastructure', codeName: 'dpi' },
  { id: '5', name: 'Uzazi Salama', codeName: 'uzazisalama' },
];

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="leading-[1.2] relative shrink-0 text-[24px] text-[#1a1a1a] dark:text-neutral-100 w-[238px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Variants</p>
      <p className="leading-[1.5] min-w-full relative shrink-0 text-[#737373] dark:text-neutral-400 text-[14px] w-[min-content]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 400 }}>View and manage all design variants.</p>
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
    <div className="bg-[rgb(105,72,172)] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#404040] transition-all" data-name="Button">
      <Frame />
      <p className="leading-[1.3] not-italic relative shrink-0 text-white text-[14px] text-nowrap whitespace-pre" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Create Variant</p>
    </div>
  );
}

function Frame16() {
  const [isOpen, setIsOpen] = useState(false);
  const [variantName, setVariantName] = useState('');
  const [variantCode, setVariantCode] = useState('');

  const handleCreateVariant = () => {
    // Handle variant creation logic here
    console.log('Creating variant:', { name: variantName, code: variantCode });
    // Reset form
    setVariantName('');
    setVariantCode('');
    setIsOpen(false);
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="bg-[rgb(105,72,172)] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#5a3d91] transition-all" data-name="Button">
            <Frame />
            <p className="leading-[1.3] not-italic relative shrink-0 text-white text-[14px] text-nowrap whitespace-pre" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Create Variant</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Variant</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="variant-name">Name</Label>
              <Input
                id="variant-name"
                value={variantName}
                onChange={(e) => setVariantName(e.target.value)}
                placeholder="Enter variant name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="variant-code">Code</Label>
              <Input
                id="variant-code"
                value={variantCode}
                onChange={(e) => setVariantCode(e.target.value)}
                placeholder="Enter variant code"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleCreateVariant}
              className="bg-[rgb(105,72,172)] text-white px-6 py-2 rounded-md hover:bg-[#5a3d91] transition-all"
              style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}
            >
              Create Variant
            </button>
          </div>
        </DialogContent>
      </Dialog>
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
          <input 
            type="text" 
            placeholder="Search variant by name or code..."
            className="font-['Fraunces',sans-serif] leading-[1.5] not-italic text-[#4e4e4e] dark:text-neutral-300 text-[14px] tracking-[0.5px] bg-transparent border-none outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-[#fcfcfc] dark:bg-[#18181b] grow h-[48px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Search Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[12px] py-[8px] relative w-full">
          <Search />
          <SearchText />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadada] dark:border-[#27272a] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame1() {
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
    <div className="bg-[#fcfcfc] dark:bg-[#18181b] box-border content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dadada] dark:border-[#27272a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame1 />
      <p className="leading-[1.14] not-italic relative shrink-0 text-[#111111] dark:text-neutral-100 text-[14px] text-nowrap tracking-[0.5px] whitespace-pre" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 600 }}>Export</p>
    </div>
  );
}

function SearchFilterComponent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Search Filter Component">
      <SearchBar />
      <Button2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative shrink-0 w-full bg-[#fafafa] dark:bg-[#0f0f12]">
      <p className="leading-[1.3] relative shrink-0 text-[#737373] dark:text-neutral-400 text-[12px] uppercase tracking-[0.8px] w-[250px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Name</p>
      <p className="leading-[1.3] relative shrink-0 text-[#737373] dark:text-neutral-400 text-[12px] uppercase tracking-[0.8px] w-[250px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Code</p>
      <div className="flex-1" />
      <p className="leading-[1.3] relative shrink-0 text-[#737373] dark:text-neutral-400 text-[12px] uppercase tracking-[0.8px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>Action</p>
    </div>
  );
}

interface VariantRowProps {
  variant: Variant;
  onView: (variant: Variant) => void;
}

function VariantRow({ variant, onView }: VariantRowProps) {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative shrink-0 w-full hover:bg-[#fafafa] dark:hover:bg-[#18181b] transition-colors">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] dark:border-[#27272a] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] dark:text-neutral-100 text-[14px] w-[250px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 400 }}>{variant.name}</p>
      <p className="leading-[1.5] not-italic relative shrink-0 text-[#737373] dark:text-neutral-400 text-[14px] w-[250px]" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 400 }}>{variant.codeName}</p>
      <div className="flex-1" />
      <button 
        onClick={() => onView(variant)}
        className="bg-transparent border border-[#1a1a1a] dark:border-neutral-500 flex gap-[8px] h-[36px] items-center justify-center px-[16px] rounded-[6px] shrink-0 cursor-pointer hover:bg-[#1a1a1a] hover:text-white transition-all text-[rgb(105,72,172)]" 
        data-name="Button"
      >
        <p className="leading-[1.3] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre" style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 500 }}>View</p>
      </button>
    </div>
  );
}

interface VariantsTableProps {
  onViewVariant: (variant: Variant) => void;
}

function VariantsTable({ onViewVariant }: VariantsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockVariants.slice(indexOfFirstItem, indexOfLastItem);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-[24px]">
      <div className="w-full">
        <Frame18 />
        {currentItems.map((variant) => (
          <VariantRow key={variant.id} variant={variant} onView={onViewVariant} />
        ))}
      </div>
      <Pagination
        totalItems={mockVariants.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}

interface VariantsListProps {
  onViewVariant: (variant: { id: string; name: string; codeName: string }) => void;
}

export function VariantsList({ onViewVariant }: VariantsListProps) {
  return (
    <div className="bg-white dark:bg-[#18181b] box-border content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] w-full shadow-sm border border-[#e5e5e5] dark:border-[#27272a]">
      <Frame16 />
      <SearchFilterComponent />
      <VariantsTable onViewVariant={onViewVariant} />
    </div>
  );
}