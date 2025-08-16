import { Link } from "react-router-dom";
import { Wrapper } from "../wrapper";
import { course } from "./courses";

export default function Course() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {course.map(({ name, description, image }, idx) => {
        const number = String(idx + 1).padStart(2, "0");
        return (
          <Wrapper
            data-aos="slide-up"
            key={idx}
            className="border border-[#A91210] rounded-[20px] space-y-5 font-[inter-SemiBold]"
          >
            <Link to="/training/first-ait-cpr">
              <div className="h-[250px]">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className={"w-full h-full rounded-[20px]"}
                />
              </div>

              <div className="space-y-4 p-5">
                <h5 className="text-[#222222] text-[20px] font-medium">
                  {number}. {name}
                </h5>
                <p className="text-[#222222] text-base line-clamp-4">
                  {description}
                </p>
              </div>
            </Link>
          </Wrapper>
        );
      })}
    </div>
  );
}
