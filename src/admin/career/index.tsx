import { CPR1 } from "@/assets";
import PrimaryButton from "@/components/ui/button";
import { FiPlusCircle } from "react-icons/fi";

export default function Careers() {
  return (
    <div className="mt-5 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-base text-[#222222]">Courses</h4>
        <PrimaryButton name="Add New" rightIcon={<FiPlusCircle />} />
      </div>
      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] p-10 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-row gap-10">
              <div className="w-44">
                <img
                  src={CPR1}
                  alt="company logo"
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-row justify-between">
                  <div className="">
                    <div className="flex gap-10 justify-between">
                      <h4 className="font-semibold text-base">Company Name</h4>
                      <p className="font-normal text-[14px]">Moni Farm LTD</p>
                    </div>
                    <div className="flex gap-10 justify-between">
                      <h4 className="font-semibold text-base">Department</h4>
                      <p className="font-normal text-[14px]">Agriculture</p>
                    </div>
                    <div className="flex gap-10 justify-between">
                      <h4 className="font-semibold text-base">Job Title</h4>
                      <p className="font-normal text-[14px]">
                        Husbandary Technical
                      </p>
                    </div>
                    <div className="flex gap-10 justify-between">
                      <h4 className="font-semibold text-base">Job Type</h4>
                      <p className="font-normal text-[14px]">Full Time</p>
                    </div>
                    <div className="flex gap-10 justify-between">
                      <h4 className="font-semibold text-base">Region</h4>
                      <p className="font-normal text-[14px]">
                        Melbourine, Australia
                      </p>
                    </div>
                  </div>

                  <div>
                    <p>200 Clicks</p>
                    <p>50 Applied</p>
                    <button>Edit</button>
                    <button>View</button>
                    <button>Delete</button>
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
