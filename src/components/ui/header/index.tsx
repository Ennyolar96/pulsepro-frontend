import { Link } from "react-router-dom";
import { coloredLogo, logo } from "../../../assets";
import PrimaryButton from "../button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { cn } from "../../utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinks } from "./links";
import { useEffect, useState } from "react";

interface prop {
  show: boolean;
  onclick: () => void;
  pathname: string;
}

const MobileNavigation = ({ show, onclick, pathname }: prop) => {
  return (
    <div
      className={`fixed ${
        show ? "flex" : "hidden"
      } top-0 left-0 w-full overflow-hidden h-dvh bg-[rgba(0,0,0,0.6)] z-20`}
    >
      <div className="flex-1 bg-transparent" onClick={onclick}></div>
      <div className="w-1/2 md:w-1/3 bg-white">
        <div className="flex flex-col justify-center">
          <div className="space-y-5 flex flex-col justify-center items-center w-full h-dvh">
            {NavLinks.map(({ name, link }, idx) => (
              <Link
                to={link}
                key={idx}
                className={`${
                  pathname === link
                    ? "text-[#A91210] border-b border-b-[#A91210]"
                    : "text-[#222222]"
                } font-medium text-xl`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Navigation({
  className,
  isHome,
  pathname,
}: {
  className?: string;
  isHome: boolean;
  pathname: string;
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1200);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1200);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile || isTablet) {
    return (
      <div>
        <div
          className={`flex justify-between items-center ${isHome && "mx-9"} ${
            isMobile && "py-2"
          } ${isTablet && "pt-3"}`}
        >
          <div className={isHome ? "block" : "hidden"}></div>
          <img
            src={coloredLogo}
            alt="PulsePro Nigeria"
            loading="lazy"
            width={isTablet ? 140 : 121}
            height={33.4}
          />
          <GiHamburgerMenu
            role="button"
            size={30}
            color={isHome ? "#fff" : "#222"}
            onClick={handleShow}
          />
        </div>

        <MobileNavigation
          show={show}
          onclick={handleShow}
          pathname={pathname}
        />
      </div>
    );
  }

  return (
    <div className={cn(className, "flex justify-between py-10 items-center")}>
      <img
        src={isHome ? logo : coloredLogo}
        alt="PulsePro Nigeria"
        loading="lazy"
      />
      <div className="space-x-12">
        {NavLinks.map(({ name, link }, idx) => (
          <Link
            to={link}
            key={idx}
            className={`${
              pathname === link
                ? "text-[#A91210] border-b border-b-[#A91210]"
                : "text-[#222222]"
            } font-medium text-xl`}
          >
            {name}
          </Link>
        ))}
      </div>
      <PrimaryButton name="Get Started" rightIcon={<FaArrowAltCircleRight />} />
    </div>
  );
}
