import { useState } from 'react';
import svgPaths from "../imports/svg-aakg4hbf8n";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

function ChevronLeftIcon() {
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

function DoubleChevronLeftIcon() {
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

function ChevronRightIcon() {
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

function DoubleChevronRightIcon() {
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

function ChevronDownIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M19.5 8.25L12 15.75L4.5 8.25" id="Vector" stroke="var(--stroke-0, #6b7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const itemsPerPageOptions = [5, 10, 25, 50, 100];

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#18181b] relative rounded-[8px] w-full" data-name="Pagination Component">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[4px] relative w-full">
          {/* Left side - Page navigation */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            {/* First page button */}
            <button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-[7px] relative rounded-[4px] hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <DoubleChevronLeftIcon />
                </div>
              </div>
            </button>

            {/* Previous page button */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px] hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <ChevronLeftIcon />
                </div>
              </div>
            </button>

            {/* Page numbers */}
            {pageNumbers.map((pageNum, index) => (
              <button
                key={index}
                onClick={() => typeof pageNum === 'number' && onPageChange(pageNum)}
                className={`box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0 ${
                  pageNum === currentPage
                    ? 'bg-[#e2ddf2] dark:bg-[#3a2f5c] h-[42px]'
                    : 'bg-[#fcfcfc] dark:bg-[#18181b] hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10'
                }`}
              >
                <div
                  className={`flex flex-col font-['Fraunces',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[0.5px] ${
                    pageNum === currentPage ? 'text-[#4f3583] dark:text-[#b9a5e6]' : 'text-[#4e4e4e] dark:text-neutral-300'
                  }`}
                >
                  <p className="leading-[1.5] whitespace-pre">{pageNum}</p>
                </div>
              </button>
            ))}

            {/* Next page button */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px] shrink-0 hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon />
            </button>

            {/* Last page button */}
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="box-border content-stretch flex gap-[10px] items-center justify-center px-[5px] py-[7px] relative rounded-[4px] shrink-0 hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <DoubleChevronRightIcon />
            </button>
          </div>

          {/* Right side - Items info and per page selector */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] dark:text-neutral-300 text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">
              <span>{`Showing `}</span>
              <span className="font-['Fraunces',sans-serif] font-bold">{startItem}</span>
              <span>{` - `}</span>
              <span className="font-['Fraunces',sans-serif] font-bold">{endItem}</span>
              <span>{` of ${totalItems}`}</span>
            </p>
            <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bbbbbb] dark:text-neutral-600 text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">|</p>
            <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] dark:text-neutral-300 text-[12px] text-nowrap tracking-[0.5px] whitespace-pre">{`Items per page: `}</p>
            
            {/* Items per page dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-white dark:bg-[#18181b] box-border content-stretch flex gap-[8px] h-[40px] items-center p-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                <div aria-hidden="true" className="absolute border border-[#d1d4d8] dark:border-[#27272a] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="font-['Fraunces',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4e4e4e] dark:text-neutral-300 text-[14px] text-nowrap tracking-[0.5px] whitespace-pre">
                  {itemsPerPage}
                </p>
                <ChevronDownIcon />
              </button>
              
              {showDropdown && (
                <div className="absolute bottom-full right-0 mb-1 bg-white dark:bg-[#18181b] border border-[#d1d4d8] dark:border-[#27272a] rounded-[8px] shadow-lg z-10">
                  {itemsPerPageOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        onItemsPerPageChange(option);
                        setShowDropdown(false);
                      }}
                      className={`w-full px-[12px] py-[8px] text-left hover:bg-gray-100 dark:hover:bg-white dark:bg-[#18181b]/10 first:rounded-t-[8px] last:rounded-b-[8px] font-['Fraunces',sans-serif] text-[14px] text-[#4e4e4e] dark:text-neutral-300 ${
                        option === itemsPerPage ? 'bg-[#e2ddf2] dark:bg-[#3a2f5c] text-[#4f3583] dark:text-[#b9a5e6]' : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
