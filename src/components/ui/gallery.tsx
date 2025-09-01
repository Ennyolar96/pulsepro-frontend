import { FaArrowAltCircleRight } from "react-icons/fa";
import PrimaryButton from "./buttons";
import { isMobile } from "../utils";
import { useState } from "react";
import { IoTrash } from "react-icons/io5";

type prop = {
  data: { path: string }[];
  onclick: () => void;
  isAdmin?: boolean;
};

export default function Gallery({ data, onclick, isAdmin = true }: prop) {
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

  const [selected, setSelected] = useState<string>("");

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

            const key = `gallery-${rowIdx}-${idx}`;
            return (
              <div
                key={idx}
                className={`w-full ${
                  isTall ? "h-[363px]" : "h-[169px] lg:h-[228px]"
                } ${applyNegativeMargin} relative`}
              >
                <img
                  src={path}
                  alt={key}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl"
                  onClick={() => setSelected(key)}
                />
                <div
                  className={`${
                    isAdmin && selected === key ? "flex" : "hidden"
                  } w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 pb-4 rounded-xl justify-center items-end`}
                >
                  <PrimaryButton
                    name="Delete"
                    rightIcon={<IoTrash size={20} />}
                    className="bg-red-500! text-white"
                  />
                </div>
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
