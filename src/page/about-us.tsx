import { gallery_2, gallery_4, gallery_5 } from "@/assets";
import Blog from "@/components/ui/blog";
import PrimaryButton from "@/components/ui/buttons";
import { Wrapper } from "@/components/ui/wrapper";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 space-y-14 font-[inter-semi]">
      <div>
        <h1 className="text-[#A91210] font-bold text-[40px]">About US</h1>

        <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
          <p>Home</p>
          <FaAngleRight />
          <p>About us</p>
        </div>
      </div>

      <Wrapper className="flex flex-wrap gap-10" data-aos="slide-up">
        <div className="flex-1 bg-[#222222] space-y-5 text-white rounded-[20px] py-[58px] px-[46px]">
          <h2 className="text-[24px] md:text-[50px] font-extrabold">
            About ResusPro Nigeria
          </h2>
          <p className="text-base font-medium leading-8 text-justify">
            ResusPro Nigeria is forward-thinking medical training institute
            committed to equipping healthcare professionals and the general
            public with the skills, knowledge, and confidence to save lives.
          </p>
          <p className="text-base font-medium leading-8 text-justify">
            Located in Osun State, Nigeria and built on a foundation of
            excellence, innovation, and service, ResusPro offers certified
            training in emergency care and professional development.
          </p>
        </div>

        <div className="w-full md:1/2 lg:w-1/3 bg-[#D9D9D969] space-y-5 text-white rounded-[20px] py-[33px] px-[41px]">
          <img
            src={gallery_2}
            alt="Training section with student"
            className="w-full h-[307px] object-cover rounded-[10px]"
          />
        </div>
      </Wrapper>

      <Wrapper
        className="flex md:flex-row flex-col-reverse gap-10"
        data-aos="slide-up"
      >
        <div className="w-full md:1/2 lg:w-1/3 space-y-5 text-white rounded-[20px] py-[33px] px-[41px]">
          <div className="flex gap-5">
            <img
              src={gallery_5}
              alt="Training section with student"
              className="w-[251px] h-[363px] object-cover rounded-[10px]"
            />

            <img
              src={gallery_4}
              alt="Training section with student"
              className="w-[251px] h-[228px] object-cover rounded-[10px]"
            />
          </div>
        </div>

        <div className="w-full lg:flex-1 space-y-5 rounded-[20px] py-[58px] px-[46px]">
          <h2 className="text-[24px] font-medium">
            Our <span className="text-[#A91210]">Mission</span>
          </h2>
          <p className="text-base font-medium leading-8 text-justify">
            Our mission is to empower lifesavers viz a viz nurses, doctors,
            paramedics, allied health workers and the general public through
            world-class, hands-on training programs tailored to real-world
            healthcare needs.
          </p>
          <p className="text-base font-medium leading-8 text-justify">
            From Basic Life Support (BLS) and Advanced Cardiovascular Life
            Support (ACLS) to Clinical Skills, PulsePro Nigeria prepares
            professionals to lead and respond effectively in critical
            situations.
          </p>

          <p className="text-base font-medium leading-8 text-justify">
            Whether you're looking to upskill, begin your journey in the field
            of healthcare, or partner for healthcare improvement, PulsePro
            Nigeria is your trusted partner in quality training and
            patient-focused care delivery.
          </p>

          <p>
            Join the ResusPro movement where passion meets precision, and
            training transforms into impact.
          </p>
        </div>
      </Wrapper>

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
