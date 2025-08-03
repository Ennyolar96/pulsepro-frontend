import { BsDot } from "react-icons/bs";
import { event1 } from "../../assets";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { cn } from "../utils";

type prop = {
  count: number;
  className?: string;
};
export default function Blog({ count, className }: prop) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
        className
      )}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <Link
          to={"/new/bill-walsh-leadership-lesson"}
          key={idx}
          className="block space-y-3"
        >
          <img
            src={event1}
            alt="blog image"
            className="rounded-[20px] object-cover"
          />
          <div className="text-[#A91210] text-sm font-semibold tracking-wide flex items-center">
            <p>Alec Whitten</p>
            <BsDot size={14} />
            <p>1 Jan 2023</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-[#1A1A1A] flex-1 text-lg font-semibold tracking-wide">
              Bill Walsh leadership lesson
            </h2>
            <MdArrowOutward size={24} className="w-10" />
          </div>
          <p className="text-[#667085] text-base font-normal tracking-wide line-clamp-2">
            Like to know the secrets of transformaing a 2-14 team into a 3x
            Super Bowl winning Dynasty?
          </p>
        </Link>
      ))}
    </div>
  );
}
