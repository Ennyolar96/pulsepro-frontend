import type { CSSProperties } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { background } from "../assets";

export default function HomePage() {
  const social = [
    { link: "", icon: FaFacebookSquare },
    { link: "", icon: FaXTwitter },
    { link: "", icon: FaLinkedin },
    { link: "", icon: FaInstagram },
    { link: "", icon: FaYoutube },
  ];
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100dvh",
  };
  return (
    <div style={backgroundStyle}>
      <div className="flex flex-col justify-center font-serif items-center h-[80%]">
        <div className="p-5 md:p-10 rounded-md text-center bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF7D] to-[#FFFFFF] w-[90%] md:w-[60%] lg:w-[40%]">
          <h1
            className="text-black font-extrabold text-[30px] md:text-[40px]"
            style={{ lineHeight: "120%" }}
          >
            We are creating something amazing
          </h1>
          <p className="mt-4 text-sm font-extralight text-[#575757]">
            Our Goal; To empower lifesavers. <br /> Launching soon.
          </p>

          <div className="mt-24">
            <p className="text-sm font-extralight text-[#575757]">
              Follow our social media
            </p>

            <div className="flex justify-center items-center mt-5 gap-5">
              {social.map(({ icon: Icon }, idx) => (
                <a
                  key={idx}
                  href=""
                  className="bg-[#FFFFFF] hover:text-blue-600 w-[24] h-[24] p-1 rounded"
                >
                  {<Icon />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
