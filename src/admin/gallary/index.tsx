import Gallery from "@/components/ui/gallery";
import * as g from "@/assets";
import PrimaryButton from "@/components/ui/button";
import { FiPlusCircle } from "react-icons/fi";

export default function AdminGallery() {
  const gallery = [
    { path: g.gallery_1 },
    { path: g.gallery_2 },
    { path: g.gallery_3 },
    { path: g.gallery_4 },
    { path: g.gallery_5 },
    { path: g.gallery_6 },
    { path: g.gallery_7 },
    { path: g.gallery_8 },
    { path: g.gallery_9 },
    { path: g.gallery_10 },
    { path: g.gallery_11 },
    { path: g.gallery_12 },
    { path: g.gallery_13 },
    { path: g.gallery_14 },
    { path: g.aslc },
    { path: g.courseEctw },
  ];
  return (
    <div>
      <div className="mt-5 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-base text-[#222222]">Courses</h4>
          <PrimaryButton name="Add New" rightIcon={<FiPlusCircle />} />
        </div>
        <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px]">
          <Gallery
            data={gallery}
            onclick={() => console.log("here")}
            isAdmin={true}
          />
        </div>
      </div>
    </div>
  );
}
