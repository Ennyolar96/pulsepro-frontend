import { FaAngleRight } from "react-icons/fa";
import Blog from "../components/ui/blog";
import { SecondaryButton } from "../components/ui/button";
import SubHeading from "../components/ui/sub-heading";

export default function News() {
  const TopNav = [
    "Success Stories",
    "First Aid",
    "Emergency",
    "Life Support",
    "CTR Training",
    "Cardiovascular",
    "Patient Care",
  ];
  return (
    <div className="font-[inter-semi] space-y-10">
      <div className=" container mx-auto px-4">
        <h1 className="text-[#A91210] font-bold text-[40px]">News</h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>News</p>
        </div>
      </div>

      <div className="space-y-20">
        <div className="container mx-auto px-4 space-y-10">
          <div>
            <SubHeading
              title="All Blog"
              description="Explore by Categories"
              hascolor={false}
            />
          </div>

          <div
            className="flex gap-5 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {TopNav.map((item, idx) => (
              <SecondaryButton
                name={item}
                key={idx}
                className="!text-[#222222]"
              />
            ))}
          </div>

          <div>
            <Blog count={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
