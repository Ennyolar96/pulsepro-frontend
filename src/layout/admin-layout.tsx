import { colorLogo } from "@/assets";
import Aside from "@/components/ui/aside";
import { Fragment, useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
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
    <Fragment>
      <div className="hidden md:block">
        <div className="h-max p-2 pt-5">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-66">
              <img src={colorLogo} alt="logo" width={162} height={42.88} />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-6">
                <HiOutlineBars3
                  size={35}
                  className="cursor-pointer"
                  role="button"
                />

                <div className="relative flex-1">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="search"
                    className="border outline-0 border-[#D5D5D5] rounded-full bg-[#F5F6FA] h-[38px] w-[388px] pl-8 pe-2 placeholder:text-[#202224] text-[14px]"
                  />
                  <IoSearchOutline className="absolute top-[12px] left-[10px]" />
                </div>
              </div>
              <div className="flex flex-row items-center"></div>
            </div>
          </div>
        </div>

        <div className="fixed w-66 bg-white mt-10 h-full">
          <Aside param={parts} />
        </div>
      </div>

      <div className="block md:hidden">
        <div className="h-max p-2">
          <div className="flex flex-col md:flex-row gap-2">
            <img src={colorLogo} alt="logo" width={100} height={22.88} />
            <div className="flex flex-row items-center gap-4">
              <HiOutlineBars3
                size={35}
                className="cursor-pointer"
                role="button"
                onClick={handleMenu}
              />
              <div className="relative flex-1">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="search"
                  className="border outline-0 border-[#D5D5D5] rounded-full bg-[#F5F6FA] h-[38px] w-full pl-8 pe-2 placeholder:text-[#202224] text-[14px]"
                />
                <IoSearchOutline className="absolute top-[12px] left-[10px]" />
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className={`fixed flex z-10 top-0 left-0 w-full h-dvh`}>
            <div className="w-66 bg-white p-2 space-y-8">
              <img src={colorLogo} alt="logo" width={162} height={42.88} />
              <Aside param={parts} />
            </div>
            <button
              onClick={handleMenu}
              className="flex-1 h-full bg-transparent"
            />
          </div>
        )}
      </div>

      <div className="md:ml-70 bg-[#F0F0F0] font-[inter-semi]">
        <div className="container mx-auto p-1 md:p-6">
          <h1 className="font-semibold text-[30px] text-[#222222] capitalize">
            {lastPart}
          </h1>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
