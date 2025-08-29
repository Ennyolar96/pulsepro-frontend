import { colorLogo } from "@/assets";
import Aside from "@/components/ui/aside";
import { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const { pathname } = useLocation();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const [open, setOpen] = useState<boolean>(false);
  const handleMenu = () => setOpen(!open);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen((prev) => !prev);
  }, [pathname]);

  return (
    <div className="space-y-5">
      <div className="h-max p-2 pt-5">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-66">
            <img src={colorLogo} alt="logo" width={162} height={42.88} />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-6">
              <HiOutlineBars3
                size={35}
                className=""
                role="button"
                onClick={handleMenu}
              />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                className="border border-[#D5D5D5] rounded-full bg-[#F5F6FA] h-[38px] w-[388px] pl-4 placeholder:text-[#202224] text-[14px]"
              />
            </div>
            <div className="flex flex-row items-center"></div>
          </div>
        </div>
      </div>

      <div className="fixed w-66 hidden md:flex bg-white mt-10 h-full">
        <Aside param={parts} />
      </div>

      <div
        className={`fixed ${
          open ? "flex" : "hidden"
        } w-66 bg-white z-10 h-full`}
      >
        <Aside param={parts} />
      </div>

      <div className="md:ml-70 bg-[#F0F0F0] pt-5 font-[inter-semi]">
        <div className="container mx-auto p-6">
          <h1 className="font-semibold text-[30px] text-[#222222] capitalize">
            {lastPart}
          </h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
