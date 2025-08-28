import PrimaryButton from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function SingleEvent() {
  return (
    <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] p-10 rounded-[20px]">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-base text-[#222222]">Courses</h4>
          <PrimaryButton
            name="update"
            className="rounded-[10px]! w-[114px]!"
            rightIcon={<FaRegEdit />}
          />
        </div>

        <div className="border-2 border-[#A91210] p-3 rounded-md">
          <div className="h-66" />
          <div>
            <h4>
              AHA Basic Life Support <span>Physical Event</span>
            </h4>

            <p>
              Our BLS training equips healthcare professionals and first
              responders with essential life-saving skills, including
              high-quality CPR, airway management, and the use of automated
              external defibrillators (AEDs).{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              reiciendis eius ea nam esse veniam doloremque cum ullam, delectus
              doloribus aut voluptatibus veritatis non quidem, quis numquam
              adipisci aliquid sit.
            </p>
          </div>
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
      </div>
    </div>
  );
}
