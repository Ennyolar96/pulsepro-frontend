import { CPR3 } from "@/assets";
import PrimaryButton, { SecondaryButton } from "@/components/ui/button";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoMdHeartEmpty, IoMdTrash } from "react-icons/io";
import { MdArrowOutward, MdModeEdit } from "react-icons/md";

export default function Blogs() {
  const [status, setStatus] = useState<string>("All");
  const [view, setView] = useState<boolean>(false);
  const [blog, setBlog] = useState<number | null>(null);

  const handleViewDetails = (id: number) => {
    setBlog(id);
    setView(true);
  };
  return (
    <div className="mt-5 space-y-4">
      <div
        className="flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", "Latest", "Draft"].map((item, idx) => (
          <SecondaryButton
            name={item}
            key={idx}
            className={`text-[#222222]! border-[#D8D8D833] ${
              item === status ? "bg-[#01B3FF] text-white!" : "bg-[#D8D8D833]"
            }`}
            handle={() => setStatus(item)}
          />
        ))}
        <PrimaryButton
          name="Add New"
          rightIcon={<FiPlusCircle />}
          className="ms-auto"
        />
      </div>
      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px] min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div
              key={idx}
              className="border border-[#A91210] rounded-[20px] cursor-pointer"
            >
              <div className="relative">
                <img
                  src={CPR3}
                  alt="blog title"
                  className="h-44 w-full object-cover rounded-t-2xl"
                />
                <button className="absolute bottom-2 bg-white right-2 p-2 border-none outline-0 rounded-md cursor-pointer">
                  <IoMdTrash size={20} color="red" />
                </button>
              </div>

              <div
                className="p-5 space-y-2"
                onClick={() => handleViewDetails(idx)}
              >
                <div className="flex items-center gap-1">
                  <p className="text-[#A91210] text-[14px] font-medium">
                    Alec Whitten
                  </p>
                  <GoDotFill color="#A91210" size={8} />
                  <p className="text-[#A91210] text-[14px] font-medium">
                    1 Jan 2025
                  </p>
                </div>
                <div className="flex items-center">
                  <h4 className="text-[#1A1A1A] line-clamp-1 text-[20px] font-medium">
                    Bill Walsh Leadership lessons
                  </h4>
                  <MdArrowOutward
                    color="#222222"
                    size={18}
                    className="ms-auto w-5"
                  />
                </div>

                <p className="line-clamp-1 text-[#667085] text-base font-normal">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto nesciunt minus temporibus incidunt explicabo veritatis,
                  mollitia cupiditate corrupti distinctio rerum iste optio
                  officia maiores provident repellat magnam velit architecto
                  odio?
                </p>

                <div className="flex justify-between items-center">
                  <p className="text-[#222222] text-[12px] font-medium">
                    2999 Views
                  </p>
                  <p className="text-[#222222] text-[12px] font-medium flex items-center gap-1">
                    <span>41</span> <IoMdHeartEmpty color="#A91210" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {view && (
        <div
          className="fixed top-0 w-full right-0 bg-[rgba(0,0,0,0.3)] h-dvh flex justify-end items-center"
          style={{ scrollbarWidth: "none" }}
        >
          <button
            className="flex-1 bg-transparent h-dvh border-none outline-0 cursor-pointer"
            onClick={() => setView(!view)}
          />
          <div className="bg-white w-[90%] md:w-1/2 h-dvh rounded-md flex p-3 overflow-y-auto">
            <ViewBlog blog={blog} />

            <button className="bg-[#01B3FF] p-3 rounded-full text-white absolute right-2 bottom-5">
              <MdModeEdit />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewBlog({ blog }: { blog: number | null }) {
  console.log(blog);
  return (
    <div className="space-y-8 w-full!">
      <div className="flex flex-wrap gap-10">
        <img
          src={CPR3}
          alt="job title"
          width={252}
          height={223}
          className="rounded-[20px] w-full h-44 object-cover"
        />
        <h3 className="text-[25px] font-medium">
          Bill Walsh leadership lessons
        </h3>
      </div>

      <div className="flex flex-col">
        <p className="text-[#222222] text-[14px] font-medium">2999 Views</p>
        <div className="h-[1px] w-full bg-black" />
        <p className="text-[#222222] text-[14px] font-medium flex items-center gap-1 ms-auto">
          <span>41</span> <IoMdHeartEmpty color="#A91210" />
        </p>
      </div>
      <div className="text-justify pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad
        provident nemo voluptatem velit explicabo eligendi. Impedit, nulla ut
        officia exercitationem et quam, accusamus reiciendis quidem suscipit
        distinctio necessitatibus facere. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe nostrum quaerat consequatur id deserunt ipsum
        aperiam aliquam perferendis tempora quia placeat ad corporis cupiditate
        ducimus velit ratione, optio animi magnam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Atque ad provident nemo voluptatem velit
        explicabo eligendi. Impedit, nulla ut officia exercitationem et quam,
        accusamus reiciendis quidem suscipit distinctio necessitatibus facere.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum
        quaerat consequatur id deserunt ipsum aperiam aliquam perferendis
        tempora quia placeat ad corporis cupiditate ducimus velit ratione, optio
        animi magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Atque ad provident nemo voluptatem velit explicabo eligendi. Impedit,
        nulla ut officia exercitationem et quam, accusamus reiciendis quidem
        suscipit distinctio necessitatibus facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Saepe nostrum quaerat consequatur id
        deserunt ipsum aperiam aliquam perferendis tempora quia placeat ad
        corporis cupiditate ducimus velit ratione, optio animi magnam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Atque ad provident
        nemo voluptatem velit explicabo eligendi. Impedit, nulla ut officia
        exercitationem et quam, accusamus reiciendis quidem suscipit distinctio
        necessitatibus facere. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe nostrum quaerat consequatur id deserunt ipsum
        aperiam aliquam perferendis tempora quia placeat ad corporis cupiditate
        ducimus velit ratione, optio animi magnam.
      </div>
    </div>
  );
}
