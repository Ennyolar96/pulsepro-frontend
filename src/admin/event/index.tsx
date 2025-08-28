import PrimaryButton from "@/components/ui/button";
import { FaCalendar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Event() {
  return (
    <div className="mt-2 space-y-10">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-base text-[#222222]">Our Event</h4>
        <PrimaryButton name="Add New" rightIcon={<FiPlusCircle />} />
      </div>

      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] p-10 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link to="../events/new-event">
              <div
                key={i}
                className="border border-[#A91210] rounded-[20px] bg-white p-4"
              >
                <div className="h-44" />

                <h3 className="text-[20px] text-medium">
                  AHA Basic Life Support{" "}
                  <span className="p-1 rounded bg-[#8979FF33] text-[#8979FF] text-[12px]">
                    Physical Event
                  </span>
                </h3>
                <p className="">
                  Our BLS training equips healthcare professionals and first
                  responders with essential life-saving skills, including
                  high-quality CPR, airway management, and the use of automated
                  external defibrillators (AEDs).
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] flex items-center gap-1 text-[#00B69B] bg-[#00B69B24] p-1 rounded">
                      <IoLocationSharp />
                      103, Ogo-oluwa, Gbonga/Ibadan Road, Osogbo, Osun State
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex flex-1">
                      <p className="text-[12px] flex items-center gap-1 bg-[#01B3FF24] text-[#01B3FF] p-1 rounded">
                        <FaCalendar />
                        25th Aug, 2025
                      </p>
                      <p className="text-[12px] flex items-center gap-1 ms-3 bg-[#FFAE4C24] text-[#FFAE4C] p-1 rounded">
                        <IoIosTime />
                        10AM
                      </p>
                    </div>
                    <p className="text-[12px] text-[#A91210] flex items-center gap-1">
                      245K
                      <MdOutlineFavoriteBorder />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
