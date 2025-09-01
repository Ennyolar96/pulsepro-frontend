import { CPR1, CPR2, CPR3 } from "@/assets";
import Blog from "@/components/ui/blog";
import PrimaryButton from "@/components/ui/buttons";
import { Wrapper } from "@/components/ui/wrapper";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function SingleTraining() {
  return (
    <div className="container mx-auto px-4 space-y-14 font-[inter-semi]">
      <div>
        <h1 className="text-[#A91210] font-bold text-[40px]">Courses</h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>Courses</p>
          <FaAngleRight />
          <p>First Aid CPR Training</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-[#222222] font-bold text-[40px]">
          First Aid CPR Training
        </h2>

        <div className="space-y-10">
          <Wrapper data-aos="slide-up">
            <div className="flex flex-wrap gap-10">
              <img
                src={CPR3}
                alt="first aid cpr training"
                className="h-[507px] flex-1 rounded-[30px]"
              />
              <div className="flex flex-row lg:flex-col gap-5 w-full lg:w-1/3">
                <img
                  src={CPR1}
                  alt="first aid cpr training"
                  className="h-[239px] rounded-[30px]"
                />
                <img
                  src={CPR2}
                  alt="first aid cpr training"
                  className="h-[239px] rounded-[30px]"
                />
              </div>
            </div>
          </Wrapper>

          <Wrapper data-aos="slide-up">
            <h3 className="text-[#222222] mb-5 font-medium text-[24px]">
              About the Course
            </h3>

            <p className="text-base font-medium text-[#222222]">
              Our First Aid & CPR course provides essential skills to manage
              common medical emergencies with confidence. Participants learn how
              to assess and respond to situations such as bleeding, burns,
              fractures, shock, fainting, and seizures, alongside practical
              training in cardiopulmonary resuscitation (CPR) for adults,
              children, and infants. Whether you're a healthcare worker,
              teacher, parent, or workplace responder, this course equips you
              with the knowledge to stabilize a person's condition and provide
              effective first response care before emergency services arrive.
            </p>
          </Wrapper>
        </div>
      </div>

      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
            Blog <span className="text-[#A91210]">Post</span>
          </h1>
          <p className="text-base text-[#222222] font-medium">
            Take a Look at our Latest news
          </p>
        </div>
        <Blog count={3} />

        <div className="flex justify-center">
          <PrimaryButton
            name="Load More"
            rightIcon={<FaArrowAltCircleRight />}
          />
        </div>
      </div>
    </div>
  );
}
