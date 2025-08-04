import { FaAngleRight } from "react-icons/fa";
import SubHeading from "../components/ui/sub-heading";
import { vector } from "../assets";
import { Wrapper } from "@/components/ui/wrapper";

export default function Career() {
  return (
    <div className="font-[inter-semi]">
      <div className=" container mx-auto px-4 space-y-10">
        <div>
          <h1 className="text-[#A91210] font-bold text-[40px]">Career</h1>

          <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
            <p>Home</p>
            <FaAngleRight />
            <p>Career</p>
          </div>
        </div>

        <div>
          <SubHeading
            title="Start doing work that matters"
            description="Our philosophy is simple - hire a team of Diverse, Passionate People
            and foster a culture that empowers you to do your best work."
            hascolor={false}
          />
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h5 className="text-[#1A1A1A] text-[20px] font-bold">Design</h5>
              <p className="text-[#667085] font-normal text-[13px]">
                Open positions in our design team
              </p>
            </div>

            <div className="space-y-10">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Wrapper
                  data-aos="slide-up"
                  key={idx}
                  className="space-y-5 bg-[#F9F9F9] px-[40px] py-[36px] rounded-[20px]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-10 flex-nowrap">
                      <h3 className="text-[#1A1A1A] text-[20px] font-bold">
                        Product Designer
                      </h3>
                      <p className="text-[14px] w-max font-medium text-[#222] bg-[#EDF4F6] p-1.5 rounded-[40px]">
                        Design
                      </p>
                    </div>
                    <div className="text-[14px] font-medium text-[#222] bg-[#EDF4F6] p-1.5 rounded-[40px]">
                      <p>Melbourne, Australia</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <p className="text-[#667085] font-normal text-[13px]">
                      We're Looking for an Experienced designer to join out
                      team.
                    </p>
                    <div className="flex items-center gap-3">
                      <img src={vector} loading="lazy" alt="full time job" />
                      <p className="text-[#667085] font-normal text-[13px]">
                        Full-time
                      </p>
                    </div>
                  </div>
                </Wrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
