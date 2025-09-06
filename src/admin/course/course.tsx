import PrimaryButton from "@/components/ui/buttons";
import { course } from "@/components/ui/course/courses";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface CourseResponse {
  id?: number;
  name: string;
  description: string;
  image: string;
}
export default function CoursesPage() {
  const [detail, setDetail] = useState<CourseResponse>(course[0]);
  const [view, setView] = useState<boolean>(false);

  const route = useNavigate();
  const handleViewDetails = (item: CourseResponse) => {
    setDetail(item);
    setView(true);
  };
  return (
    <div className="mt-5 space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-base text-[#222222]">Courses</h4>
        <PrimaryButton
          name="Add New"
          rightIcon={<FiPlusCircle />}
          handle={() => route("../courses?upload-course")}
        />
      </div>
      <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 px-2 rounded-[20px] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {course.map((item, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={idx}
                className="border border-[#A91210] rounded-[20px] space-y-5 font-[inter-SemiBold]"
                onClick={() => handleViewDetails(item)}
              >
                <div className="h-[250px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className={"w-full h-full rounded-[20px]"}
                  />
                </div>

                <div className="space-y-4 p-5">
                  <h5 className="text-[#222222] text-[20px] font-medium">
                    <span className="text-[#A91210]">{number}. </span>
                    {item.name}
                  </h5>
                  <p className="text-[#222222] text-base line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
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
            <ViewCourse details={detail} />

            <button className="bg-[#01B3FF] p-3 rounded-full text-white absolute right-2 bottom-5">
              <MdModeEdit />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewCourse({ details }: { details: CourseResponse }) {
  return (
    <div className="space-y-8 w-full!">
      <img
        src={details.image}
        alt="job title"
        width={252}
        height={223}
        className="rounded-[20px] w-full h-44 object-cover"
      />
      <div className="flex flex-col">
        <h2>{details.name}</h2>
        <div className="h-[1px] w-full bg-black" />
      </div>
      <div className="text-justify pb-10">{details.description}</div>
    </div>
  );
}
