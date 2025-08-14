import { Wrapper } from "@/components/ui/wrapper";
import type { CSSProperties } from "react";
import { FaAngleRight, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ColoredLogoBackground } from "../assets";
import PrimaryButton from "../components/ui/button";
import SubHeading from "../components/ui/sub-heading";

export default function ContactUs() {
  const background: CSSProperties = {
    backgroundImage: `url(${ColoredLogoBackground})`,
  };

  const contact = [
    { title: "+234 816 704 9768", sub: "tel", icon: FaWhatsapp },
    { title: "info@resuspronigeria.com", sub: "email", icon: FaEnvelope },
    {
      title: "103, Ogo-oluwa, Gbongan/Ibadan Road, Osogbo, Osun State.",
      sub: "",
      icon: FaLocationDot,
    },
  ];
  return (
    <div className="space-y-10">
      <div className="container mx-auto px-4 space-y-10">
        <div>
          <h1 className="text-[#222222] font-bold text-[40px]">
            Contact
            <span className="text-[#A91210]"> Us</span>
          </h1>

          <div className="flex items-center gap-0.5 text-[#22222299] font-medium">
            <p>Home</p>
            <FaAngleRight />
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1136406379865!2d4.538696145131541!3d7.777773587396859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787eb656c472b%3A0x20ccdff0be17d0d6!2s103%20Gbongan%20-%20Ibadan%20Rd%2C%20Osogbo%20230284%2C%20Osun!5e0!3m2!1sen!2sng!4v1754230069154!5m2!1sen!2sng"
          width="100%"
          height="436"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className="container mx-auto px-4 space-y-10">
        <SubHeading
          title="Send us Message"
          description="Our philosophy is simple - hire a team of Diverse, Passionate People
            and foster a culture that empowers you to do your best work."
          hascolor={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Wrapper data-aos="slide-up">
            <form className="space-y-10">
              <div className="flex flex-row gap-10">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="rounded-[20px] px-2.5 py-5 bg-[#F9F9F9] w-full border-none outline-none text-[20px] text-[#1A1A1A]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-[20px] px-2.5 py-5 bg-[#F9F9F9] w-full border-none outline-none text-[20px] text-[#1A1A1A]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="rounded-[20px] px-2.5 py-5 bg-[#F9F9F9] w-full border-none outline-none text-[20px] text-[#1A1A1A]"
              />

              <textarea
                className="rounded-[20px] px-6.5 py-5 bg-[#F9F9F9] w-full h-[252px] resize-none border-none outline-none text-[20px] text-[#1A1A1A]"
                placeholder="Write Your Message..."
                rows={30}
                cols={30}
              ></textarea>

              <PrimaryButton name="Send Message" className="px-5 py-4 w-full" />
            </form>
          </Wrapper>
          <Wrapper
            data-aos="slide-up"
            className="bg-no-repeat bg-contain bg-center object-cover"
            style={background}
          >
            <div className="shadow-lg bg-white w-full  lg:w-[440px] rounded-[20px] space-y-5 p-5 shadow-[#0000000D]">
              {contact.map(({ title, sub, icon: Icon }, idx) => (
                <div className="flex gap-5 items-center" key={idx}>
                  <div className="rounded-full w-[51.88px] h-[51.88px] bg-[#A91210] p-2.5 flex justify-center items-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <a
                      href={
                        sub === "tel"
                          ? "tel:+2348167049768"
                          : sub === "email"
                          ? `mailto:${title}`
                          : "#"
                      }
                      className="text-base font-medium text-[#222]"
                    >
                      {title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
