import { colorLogo } from "@/assets";
import Aside from "@/components/ui/aside";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="p-2">
      <div className="h-[86px]">
        <div className="flex flex-row items-center">
          <div className="w-66">
            <img src={colorLogo} alt="logo" width={162} height={42.88} />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
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
      <div className="fixed w-66 bg-white h-full mt-12">
        <Aside />
      </div>
      <div className="ml-70 bg-[#F0F0F0] h-dvh pt-5 font-[inter-semi]">
        <div className="container mx-auto p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
