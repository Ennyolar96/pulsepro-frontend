import { Link } from "react-router-dom";
import { coloredLogo, logo } from "../../../assets";
import PrimaryButton from "../button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { cn, isMobile, isTablet } from "../../utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinks } from "./links";

export default function Navigation({ className }: { className?: string }) {
  if (isMobile || isTablet) {
    return (
      <div
        className={`flex justify-between items-center ${
          isMobile && "mx-4 py-2"
        } ${isTablet && "mx-10 pt-8"}`}
      >
        <div></div>
        <img
          src={coloredLogo}
          alt="company logo"
          width={isTablet ? 140 : 121}
          height={33.4}
        />
        <GiHamburgerMenu role="button" size={30} color="#ffffff" />
      </div>
    );
  }

  return (
    <div className={cn(className, "flex justify-between py-10 items-center")}>
      <img src={logo} alt="company logo" />
      <div className="space-x-12">
        {NavLinks.map(({ name, link }, idx) => (
          <Link
            to={link}
            key={idx}
            className="text-[#222222] font-extrabold text-xl"
          >
            {name}
          </Link>
        ))}
      </div>
      <PrimaryButton name="Get Started" rightIcon={<FaArrowAltCircleRight />} />
    </div>
  );
}

export function RootNavigation({ className }: { className?: string }) {
  if (isTablet || isMobile) {
    return (
      <div className="container mx-auto px-4">
        <div
          className={`flex justify-between items-center ${isMobile && "py-2"} ${
            isTablet && "pt-8"
          }`}
        >
          <img
            src={coloredLogo}
            alt="company logo"
            width={isTablet ? 140 : 121}
            height={33.4}
          />
          <GiHamburgerMenu role="button" size={30} color="#222222" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10">
      <div className={cn(className, "flex justify-between py-10 items-center")}>
        <img src={coloredLogo} alt="company logo" />
        <div className="space-x-12">
          {NavLinks.map(({ name, link }, idx) => (
            <Link
              to={link}
              key={idx}
              className="text-[#222222] font-extrabold text-xl"
            >
              {name}
            </Link>
          ))}
        </div>
        <PrimaryButton
          name="Get Started"
          rightIcon={<FaArrowAltCircleRight />}
        />
      </div>
    </div>
  );
}
