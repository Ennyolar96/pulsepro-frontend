import {
  banner,
  event1,
  event2,
  event3,
  event4,
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
} from "@/assets";
import Blog from "@/components/ui/blog";
import PrimaryButton, { SecondaryButton } from "@/components/ui/button";
import Course from "@/components/ui/course";
import Footer from "@/components/ui/footer";
import Gallery from "@/components/ui/gallery";
import Navigation from "@/components/ui/header";
import ImageSlider from "@/components/ui/sliders/image_slider";
import Testimonial from "@/components/ui/sliders/testimonial";
import { Wrapper } from "@/components/ui/wrapper";
import { isMobile, isTablet } from "@/components/utils";
import { CalendarDays } from "lucide-react";
import type { CSSProperties } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${banner})`,
    backgroundSize: isMobile ? "100% 85%" : isTablet ? "100% 100%" : "cover",
  };
  const router = useNavigate();

  const gallery = [
    { path: gallery_1 },
    { path: gallery_2 },
    { path: gallery_3 },
    { path: gallery_4 },
    { path: gallery_5 },
    { path: gallery_6 },
    { path: gallery_7 },
    { path: gallery_8 },
  ];

  const LoadMore = () => {
    router("/galleries");
  };

  const blogs = [
    { image: event1, eventDate: "25th AUG" },
    { image: event2, eventDate: "25th AUG" },
    { image: event3, eventDate: "25th AUG" },
    { image: event4, eventDate: "25th AUG" },
  ];

  return (
    <div className="font-[inter-Black] custom">
      <div
        style={backgroundStyle}
        className="bg-blend-multiply bg-contain md:bg-cover bg-no-repeat w-full "
      >
        <div className="container mx-auto">
          <Navigation isHome={true} pathname="/home" />
          <div className="flex flex-col text-center justify-center space-y-5 p-10 w-full h-full items-center">
            <h1 className="font-black text-[30px] md:text-[50px] lg:text-[80px] text-white">
              Empowering <br />{" "}
              <span className="text-[#01B3FF]">Lifesavers</span> Through <br />{" "}
              Knowledge
            </h1>

            <p className="font-semibold text-base md:text-[25px] text-white">
              Bringing medical awareness, expert skillets, and education
              together
            </p>

            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <PrimaryButton
                name="Get Started"
                rightIcon={<FaArrowAltCircleRight />}
                className=""
              />
              <SecondaryButton name="Learn More" />
            </div>
          </div>
          <div className="pb-56" />
        </div>
      </div>

      <div className="-mt-64">
        <ImageSlider />
      </div>

      <div className="container mx-auto mt-5 p-5 md:p-20 space-y-20">
        <Wrapper className="flex gap-10" data-aos="slide-up">
          <div className="w-full lg:w-1/2 bg-[#222222] space-y-5 text-white rounded-[20px] py-[58px] px-[46px]">
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

            <div className="lg:hidden flex justify-center">
              <PrimaryButton
                name="Read More"
                rightIcon={<FaArrowAltCircleRight />}
                handle={() => router("/about-us")}
              />
            </div>
          </div>

          <div className="hidden lg:block w-1/2 bg-[#D9D9D969] space-y-5 text-white rounded-[20px] py-[33px] px-[41px]">
            <img
              src={gallery_2}
              alt="Training section with student"
              className="w-full h-[307px] object-cover rounded-[10px]"
            />
            <div className="flex justify-center">
              <PrimaryButton
                name="Read More"
                rightIcon={<FaArrowAltCircleRight />}
                handle={() => router("/about-us")}
              />
            </div>
          </div>
        </Wrapper>

        <Wrapper className="space-y-10" data-aos="slide-up">
          <div className="text-center space-y-2">
            <h3 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
              <span className="text-[#A91210]">Popular</span> Training Courses
            </h3>
            <p className="text-base text-[#222222] font-medium">
              Join thousands of learners already enrolled in these trending
              <br /> Medical courses.
            </p>
          </div>

          <div>
            <Course param="/training" />
          </div>
        </Wrapper>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
          Our <span className="text-[#A91210]">Gallery</span>
        </h3>
        <p className="text-base text-[#222222] font-medium">
          Pictures of our past and present events
        </p>
      </div>

      <Wrapper
        data-aos="slide-up"
        className="bg-[#222222] mt-10 pb-44 md:pb-12 space-y-20"
      >
        <div className="container mx-auto p-5 md:p-20 space-y-20">
          <Gallery data={gallery} onclick={LoadMore} />
          <div className="text-center space-y-2">
            <h3 className="text-white text-[40px] font-semibold">
              <span className="text-[#A91210]">Latest</span> Events
            </h3>
            <p className="text-base text-white font-medium">
              Check out our schedules for next coming events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {blogs.map(({ image, eventDate }, idx) => (
              <Wrapper
                data-aos="slide-up"
                key={idx}
                className="flex bg-white rounded-[20px] p-1.5 md:p-2.5 gap-4"
              >
                <div className="relative w-[110px] md:w-[181px] h-[179px]">
                  <img
                    src={image}
                    alt="event title"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                  <div className="absolute flex items-center gap-2 left-3 bottom-3 bg-[#A9121085] text-white py-2 px-1.5 rounded-xl">
                    <CalendarDays size={13.5} />{" "}
                    <span className="font-medium text-[14px]">{eventDate}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2 md:space-y-5">
                  <h5 className="font-medium text-[20px] line-clamp-2 text-[#222222]">
                    Akwa Ibom: AHA Basic Life Support (BLS) Schedule
                  </h5>
                  <p className="text-base font-normal line-clamp-4 text-[#222] md:leading-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem accusantium debitis consectetur minima, dolores
                    sapiente ipsum natus tempore illo.
                  </p>
                </div>
              </Wrapper>
            ))}
          </div>
        </div>
      </Wrapper>

      <div className="flex justify-center -mt-44 md:-mt-18">
        <Wrapper
          data-aos="slide-up"
          className="bg-[#A91210B0] text-white px-[27px] py-[37px] rounded-[20px] border flex flex-col md:flex-row text-center justify-between items-center w-[167px] md:w-[889px] h-[395px] md:h-[126px]"
        >
          <div>
            <h2 className="text-[30px] md:text-[40px] font-black">100+</h2>
            <p className="text-[14px] text-base">Quality Tutors</p>
          </div>

          <div>
            <h2 className="text-[30px] md:text-[40px] font-black">1,200+</h2>
            <p className="text-[14px] text-base">Students Enrolled</p>
          </div>

          <div>
            <h2 className="text-[30px] md:text-[40px] font-black">100+</h2>
            <p className="text-[14px] text-base">Popular Courses</p>
          </div>

          <div>
            <h2 className="text-[30px] md:text-[40px] font-black">20+</h2>
            <p className="text-[14px] text-base">Rewards</p>
          </div>
        </Wrapper>
      </div>

      <div className="container mx-auto mt-5 p-5 md:p-20 space-y-20">
        <Wrapper data-aos="slide-up" className="mt-10">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-[#A91210] text-[25px] md:text-[40px] font-semibold">
              Testimonials
            </h3>
            <p className="text-base text-[#222222] font-medium">
              What Students Say about out Platform
            </p>
          </div>

          <Testimonial />
        </Wrapper>

        <Wrapper data-aos="slide-up" className="mt-10 space-y-10">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
              Blog <span className="text-[#A91210]">Post</span>
            </h3>
            <p className="text-base text-[#222222] font-medium">
              Take a look at our latest news
            </p>
          </div>

          <Blog count={3} />

          <div className="flex justify-center">
            <PrimaryButton
              name="View More"
              rightIcon={<FaArrowAltCircleRight />}
              handle={() => router("/news")}
            />
          </div>
        </Wrapper>
      </div>

      <Wrapper data-aos="slide-up">
        <Footer />
      </Wrapper>
    </div>
  );
}
