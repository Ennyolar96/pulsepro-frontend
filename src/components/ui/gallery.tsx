import { FaArrowAltCircleRight } from "react-icons/fa";
import PrimaryButton from "./button";
import { isMobile } from "../utils";

type prop = {
  data: { path: string }[];
  onclick: () => void;
};

export default function Gallery({ data, onclick }: prop) {
  // Group into rows of 4
  const grouped = [];
  if (isMobile) {
    for (let i = 0; i < data.length; i += 2) {
      grouped.push(data.slice(i, i + 2));
    }
  } else {
    for (let i = 0; i < data.length; i += 4) {
      grouped.push(data.slice(i, i + 4));
    }
  }

  return (
    <div className="flex flex-col gap-8 relative">
      {grouped.map((group, rowIdx) => (
        <div key={rowIdx} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {group.map(({ path }, idx) => {
            const isEvenRow = rowIdx % 2 === 0;
            const isTall = isEvenRow ? idx % 2 === 0 : idx % 2 !== 0;

            // Apply -mt-34 only to tall images in odd rows (under a short one)
            const applyNegativeMargin =
              !isEvenRow && isTall && !isMobile
                ? "-mt-34"
                : isMobile && !isEvenRow && isTall
                ? "-mt-48"
                : "";

            return (
              <div
                key={idx}
                className={`w-full ${
                  isTall ? "h-[363px]" : "h-[169px] lg:h-[228px]"
                } ${applyNegativeMargin}`}
              >
                <img
                  src={path}
                  alt={`gallery-${rowIdx}-${idx}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            );
          })}
        </div>
      ))}

      <PrimaryButton
        handle={onclick}
        name="Load More"
        className={`absolute bottom-8 ${!isMobile ? "right-24" : "right-5"}`}
        rightIcon={<FaArrowAltCircleRight />}
      />
    </div>
  );
}
