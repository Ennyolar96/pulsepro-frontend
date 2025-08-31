import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type Prop = {
  currentPage: number;
  totalPages: number;
  onPageChange: (item: number) => void;
};

export default function SmartPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Prop) {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const numbers: (number | string)[] = [];

  if (totalPages <= 7) {
    numbers.push(...range(1, totalPages));
  } else {
    const startBlock = 3;
    const left = Math.max(startBlock + 1, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    numbers.push(...range(1, startBlock));

    if (left > startBlock + 1) {
      numbers.push("...");
    }

    numbers.push(...range(left, right));

    if (right < totalPages - 1) {
      numbers.push("...");
    }

    numbers.push(totalPages); // always last
  }

  const btnClass = (active = false) =>
    `w-8 h-8 rounded-md text-sm font-medium transition flex items-center justify-center select-none
    ${active ? "bg-blue-600 text-white" : "hover:bg-slate-200"}`;

  const disabled = (cond: boolean) =>
    cond ? "opacity-40 pointer-events-none" : "";

  return (
    <nav className="flex items-center gap-1.5">
      {/* First */}
      <button
        onClick={() => onPageChange(1)}
        className={`${btnClass()} ${disabled(
          currentPage === 1
        )} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
      >
        <ChevronsLeft size={16} />
      </button>

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`${btnClass()} ${disabled(
          currentPage === 1
        )} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Numbers */}
      {numbers.map((n, i) =>
        n === "..." ? (
          <span
            key={`dots-${i}`}
            className={`${btnClass()} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
          >
            ...
          </span>
        ) : (
          <button
            key={n}
            onClick={() => onPageChange(n as number)}
            className={`${btnClass(
              n === currentPage
            )} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
          >
            {n}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`${btnClass()} ${disabled(
          currentPage === totalPages
        )} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
      >
        <ChevronRight size={16} />
      </button>

      {/* Last */}
      <button
        onClick={() => onPageChange(totalPages)}
        className={`${btnClass()} ${disabled(
          currentPage === totalPages
        )} bg-[#FFFFFF] border border-[#F1F1F1] rounded-[2px]`}
      >
        <ChevronsRight size={16} />
      </button>
    </nav>
  );
}
