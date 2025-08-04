import { Link } from "react-router-dom";
import { logo } from "../../../assets";
import PrimaryButton from "../button";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { NavLinks } from "../header/links";

export default function Footer() {
  const social = [
    { link: "", icon: BsTwitterX },
    { link: "", icon: FaLinkedinIn },
    { link: "", icon: FaSquareFacebook },
    { link: "", icon: IoLogoInstagram },
  ];
  return (
    <div className="h-auto w-full">
      <div className="bg-[#222222] px-[30px] md:px-[94px] py-[58px]">
        <div className="container mx-auto space-y-14">
          <div className="h-[296px] bg-[#D9D9D90D] px-10 rounded-[20px] grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#01B3FF]">
                Get In Touch
              </h2>
              <p className="text-base font-medium text-white">
                Subscribe to our news letter, to get updates from us!
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                inputMode="email"
                placeholder="Enter Your Email Address"
                className="py-4.5 px-5.5 bg-[#D9D9D9] rounded-[60px] w-full placeholder:text-[#22222294] placeholder:text-base placeholder:font-medium border-none outline-none pr-28"
              />
              <PrimaryButton
                name="Subscribe"
                className="absolute right-3 top-2.5"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
            <div>
              <img src={logo} alt="PulsePro Nigeria" loading="lazy" />
            </div>
            <div className="gap-5 md:gap-12 flex flex-col md:flex-row">
              {NavLinks.map(({ name, link }, idx) => (
                <Link
                  to={link}
                  key={idx}
                  className="text-white block text-center capitalize font-extrabold text-xl"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex gap-10">
              {social.map(({ link, icon: Icon }, idx) => (
                <div key={idx}>
                  <a
                    href={link}
                    className="w-8.5 h-8.5 rounded-full bg-[#A91210] flex items-center justify-center text-white"
                  >
                    <Icon size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#A91210] h-[70px] md:h-[56px] flex items-center">
        <div className="container mx-auto">
          <p className="flex justify-center text-white text-base font-medium">
            {new Date().getFullYear()} PulsePro Nigeria. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
