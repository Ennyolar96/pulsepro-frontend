import { CPR2 } from "@/assets";
import PrimaryButton, { SecondaryButton } from "@/components/ui/buttons";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { IoIosTime, IoMdTrash } from "react-icons/io";
import {
  MdArrowOutward,
  MdModeEdit,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const [status, setStatus] = useState<string>("All");
  const [view, setView] = useState<boolean>(false);
  const [eventId, setEventId] = useState<number | null>(null);

  const route = useNavigate();
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
          handle={() => route("../events?upload-event")}
        />
      </div>

      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="border border-[#A91210] rounded-[20px] cursor-pointer"
            >
              <div className="relative">
                <img
                  src={CPR2}
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
                    Physical Event
                  </p>
                  <GoDotFill color="#A91210" size={8} />
                  <p className="text-[#A91210] text-[14px] font-medium">
                    1 Jan 2025
                  </p>
                  <GoDotFill color="#A91210" size={8} />
                  <p className="text-[#A91210] text-[14px] font-medium">
                    10 AM to 12 PM
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
                    <span>41</span>
                    <HiUsers size={16} />
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
