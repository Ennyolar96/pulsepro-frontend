import { CPR1, vector } from "@/assets";
import PrimaryButton, { SecondaryButton } from "@/components/ui/buttons";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";

export default function Careers() {
  const [status, setStatus] = useState<string>("All");
  const [view, setView] = useState<boolean>(false);
  const [careerId, setCareerId] = useState<number | null>(null);

  const handleViewDetails = (id: number) => {
    setCareerId(id);
    setView(true);
  };

  return (
    <div className="mt-5 space-y-4">
      <div
        className="flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", "Expired", "Draft"].map((item, idx) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="space-y-5 bg-white p-5 rounded-md cursor-pointer"
              onClick={() => handleViewDetails(i + 1)}
            >
              <div className="flex flex-row items-center gap-3">
                <img
                  src={CPR1}
                  alt="job title"
                  className="w-8 h-8 rounded-full"
                />
                <h4 className="flex-1 line-clamp-1">Software Developer</h4>
              </div>

              <div className="flex justify-between">
                <p className="bg-[#01B3FF0F] px-2 py-1 rounded-md text-[13px]">
                  Full time
                </p>
                <p className="bg-[#01B3FF0F] px-2 py-1 rounded-md text-[13px] text-green-600">
                  Active
                </p>
                <p className="bg-[#01B3FF0F] px-2 py-1 rounded-md text-[13px]">
                  200 Clicks
                </p>
              </div>

              <div className="flex items-center gap-5">
                <h5 className="flex-1 line-clamp-1">Company name</h5>
                <div className="w-16 flex items-center flex-nowrap gap-1 bg-[#01B3FF0F] rounded-full p-2">
                  <HiOutlineUsers />
                  <span>200</span>
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
            className="flex-1 bg-transparent h-dvh border-none outline-0"
            onClick={() => setView(!view)}
          />
          <div className="bg-white w-[90%] md:w-1/2 h-dvh rounded-md flex p-3 overflow-y-auto">
            <ViewCareer careerId={careerId} />

            <button className="bg-[#01B3FF] p-3 rounded-full text-white absolute right-2 bottom-5">
              <MdModeEdit />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewCareer({ careerId }: { careerId: number | null }) {
  console.log(careerId);
  return (
    <div className="space-y-8 w-full!">
      <div className="flex flex-wrap gap-10">
        <img
          src={CPR1}
          alt="job title"
          width={252}
          height={223}
          className="rounded-[20px] w-full h-44 object-cover"
        />
        <div className="space-y-5">
          <h3 className="text-[30px] font-medium">Husbandry Technician</h3>
          <div className="flex gap-10">
            <p className="bg-[#EDF4F6] font-medium rounded-[40px] text-[14px] px-2">
              Agriculture
            </p>
            <div className="flex items-center gap-2">
              <img src={vector} alt="no" />
              <p>Part-time</p>
            </div>
          </div>
          <p className="bg-[#EDF4F6] font-medium rounded-[40px] text-[14px] text-center w-max px-2">
            Melbourme, Australia
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-black" />
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
