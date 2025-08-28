import { CPR1, CPR2, CPR3 } from "@/assets";
import PrimaryButton from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";

export default function SingleCourse() {
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
        <div className="flex flex-row flex-nowrap gap-10">
          <div>
            <img
              src={CPR3}
              alt="first aid cpr training"
              className="h-[507px] flex-1 rounded-[30px]"
            />
          </div>
          <div className="w-1/3 space-y-10">
            <img
              src={CPR1}
              alt="first aid cpr training"
              className="h-[239px] rounded-[30px] w-full "
            />
            <img
              src={CPR2}
              alt="first aid cpr training"
              className="h-[239px] rounded-[30px] w-full "
            />
          </div>
        </div>

        <div>
          <h3 className="text-[#222222] mb-5 font-medium text-[24px]">
            About the Course
          </h3>

          <p className="text-base font-medium text-[#222222]">
            Our First Aid & CPR course provides essential skills to manage
            common medical emergencies with confidence. Participants learn how
            to assess and respond to situations such as bleeding, burns,
            fractures, shock, fainting, and seizures, alongside practical
            training in cardiopulmonary resuscitation (CPR) for adults,
            children, and infants. Whether you're a healthcare worker, teacher,
            parent, or workplace responder, this course equips you with the
            knowledge to stabilize a person's condition and provide effective
            first response care before emergency services arrive.
          </p>
        </div>
      </div>
    </div>
  );
}
