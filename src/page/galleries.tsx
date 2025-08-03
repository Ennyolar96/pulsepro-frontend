import { FaAngleRight, FaArrowAltCircleRight } from "react-icons/fa";
import Gallery from "../components/ui/gallery";
import * as g from "../assets";
import Blog from "../components/ui/blog";
import PrimaryButton from "../components/ui/button";

export default function Galleries() {
  const gallery = [
    { path: g.gallery1 },
    { path: g.gallery2 },
    { path: g.gallery3 },
    { path: g.gallery4 },
    { path: g.gallery5 },
    { path: g.gallery6 },
    { path: g.gallery7 },
    { path: g.gallery8 },
    { path: g.gallery1 },
    { path: g.gallery2 },
    { path: g.gallery3 },
    { path: g.gallery4 },
    { path: g.gallery5 },
    { path: g.gallery6 },
    { path: g.gallery7 },
    { path: g.gallery8 },
  ];

  const LoadMore = () => {};
  return (
    <div className="font-[inter-semi] space-y-10">
      <div className=" container mx-auto px-4">
        <h1 className="text-[#A91210] font-bold text-[40px]">
          Our <span className="text-[#222222]">Gallery</span>
        </h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>Gallery</p>
        </div>
      </div>

      <div className="space-y-20">
        <div className="bg-[#222] rounded-[20px] py-10">
          <div className="container mx-auto px-4">
            <Gallery data={gallery} onclick={LoadMore} />
          </div>
        </div>

        <div className="container mx-auto px-4 space-y-10">
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
    </div>
  );
}
