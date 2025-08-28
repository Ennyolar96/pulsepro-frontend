import PrimaryButton from "@/components/ui/button";
import Course from "@/components/ui/course";
import { FiPlusCircle } from "react-icons/fi";

export default function Courses() {
  return (
    <div className="mt-5 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-base text-[#222222]">Courses</h4>
        <PrimaryButton name="Add New" rightIcon={<FiPlusCircle />} />
      </div>
      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] p-10 rounded-[20px]">
        <Course param="../courses" />
      </div>
    </div>
  );
}
