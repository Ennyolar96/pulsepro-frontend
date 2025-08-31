import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RollingPagination({
  totalPages = 20,
  initialPage = 1,
  visibleCount = 5,
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  /* ---------- helpers ---------- */
  const firstVisible = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(visibleCount / 2),
      totalPages - visibleCount + 1
    )
  );
  const lastVisible = Math.min(totalPages, firstVisible + visibleCount - 1);
  const numbers = Array.from(
    { length: lastVisible - firstVisible + 1 },
    (_, i) => firstVisible + i
  );

  /* ---------- handlers ---------- */
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <nav className="flex items-center gap-2 font-sans">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-slate-200 disabled:opacity-40"
      >
        <ChevronLeft size={20} />
      </button>

      {numbers.map((n) => (
        <button
          key={n}
          onClick={() => setCurrentPage(n)}
          className={`w-8 h-8 rounded-md text-sm font-medium transition
            ${
              n === currentPage
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-200"
            }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-slate-200 disabled:opacity-40"
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
}
