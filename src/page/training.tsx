import { FaAngleRight, FaArrowAltCircleRight } from "react-icons/fa";
import Course from "../components/ui/course";
import Blog from "../components/ui/blog";
import PrimaryButton from "../components/ui/buttons";

export default function Training() {
  return (
    <div className="container mx-auto px-4 space-y-14">
      <div>
        <h1 className="text-[#A91210] font-bold text-[40px]">Courses</h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>Courses</p>
        </div>
      </div>

      <div>
        <Course />
      </div>

      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
            Blog <span className="text-[#A91210]">Post</span>
          </h1>
          <p className="text-base text-[#222222] font-medium">
            Take a Look at our Latest news
          </p>
        </div>
        <Blog count={3} />

        <div className="flex justify-center">
          <PrimaryButton
            name="Load More"
            rightIcon={<FaArrowAltCircleRight />}
          />
        </div>
      </div>
    </div>
  );
}
