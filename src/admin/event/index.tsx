import { CPR2 } from "@/assets";
import PrimaryButton, { SecondaryButton } from "@/components/ui/button";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import { MdModeEdit, MdOutlineFavoriteBorder } from "react-icons/md";

export default function Event() {
  const [status, setStatus] = useState<string>("All");
  const [view, setView] = useState<boolean>(false);
  const [eventId, setEventId] = useState<number | null>(null);

  const handleViewDetails = (id: number) => {
    setEventId(id);
    setView(true);
  };
  return (
    <div className="mt-5 space-y-4">
      <div
        className="flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", "Upcoming", "Draft"].map((item, idx) => (
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

      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#A91210] rounded-[20px] bg-white flex flex-row flex-nowrap shadow-md gap-3"
              onClick={() => handleViewDetails(i + 1)}
            >
              <img
                src={CPR2}
                alt=""
                className="h-auto w-36 rounded-tl-[20px] rounded-bl-[20px] object-cover"
              />
              <div className="flex-1 space-y-3 py-3">
                <h3 className="text-[20px] text-medium line-clamp-2">
                  AHA Basic Life Support AHA Basic Life Support{" "}
                </h3>
                <div className="flex">
                  <p className="text-[12px] flex items-center gap-1 bg-[#01B3FF24] text-[#01B3FF] p-1 rounded">
                    <FaCalendar />
                    25th Aug, 2025
                  </p>
                  <p className="text-[12px] flex items-center gap-1 ms-3 bg-[#FFAE4C24] text-[#FFAE4C] p-1 rounded">
                    <IoIosTime />
                    10AM
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="p-1 flex rounded bg-[#8979FF33] text-[#8979FF] text-[12px]">
                    Physical Event
                  </p>
                  <p className="text-[12px] text-[#A91210] flex items-center gap-1">
                    245K
                    <MdOutlineFavoriteBorder />
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
            className="flex-1 bg-transparent h-dvh border-none outline-0"
            onClick={() => setView(!view)}
          />
          <div className="bg-white w-[90%] md:w-1/2 h-dvh rounded-md flex p-3 pb-20 overflow-y-auto">
            <ViewEventDetails eventId={eventId} />

            <button className="bg-[#01B3FF] p-3 rounded-full text-white absolute right-2 bottom-5">
              <MdModeEdit />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewEventDetails({ eventId }: { eventId: number | null }) {
  console.log(eventId);
  return (
    <div className="space-y-4 w-full!">
      <img
        src={CPR2}
        alt="job title"
        width={252}
        height={223}
        className="rounded-[20px] w-full h-44 object-cover"
      />
      <div className="flex flex-nowrap items-center">
        <h2 className="flex-1 text-[20px] font-medium">Event title here</h2>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[13px] flex items-center gap-1 text-[#222222]">
            <FaCalendar />
            25th Aug, 2025
          </p>
          <p className="text-[14px] text-[#A91210] flex items-center gap-1">
            245K
            <MdOutlineFavoriteBorder size={14} />
          </p>
        </div>
        <div className="h-[1px] w-full bg-black" />
        <div className="flex justify-between">
          <p className="text-[14px] text-[#A91210] flex items-center gap-1">
            Physical Event
          </p>
          <p className="text-[13px] flex items-center text-[#222222] gap-1">
            <IoIosTime />
            10AM
          </p>
        </div>
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
