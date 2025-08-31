import PrimaryButton, { SecondaryButton } from "@/components/ui/button";
import SmartPagination from "@/components/ui/pagination/smartPagination";
import { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

export default function Student() {
  const [status, setStatus] = useState<string>("All");
  const [page, setPage] = useState(1);
  const totalPages = 20;
  return (
    <div className="bg-[#D8D8D833] border-4 border-[#D8D8D880] py-5 pb-14 px-2 rounded-[20px] space-y-5">
      <div
        className="flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", "Complete", "Incomplete"].map((item, idx) => (
          <SecondaryButton
            name={item}
            key={idx}
            className={`text-[#222222]! border-[#D8D8D833] ${
              item === status ? "bg-[#01B3FF] text-white!" : "bg-[#D8D8D833]"
            }`}
            handle={() => setStatus(item)}
          />
        ))}
        <PrimaryButton
          name="Add New"
          rightIcon={<FiPlusCircle />}
          className="ms-auto"
        />
      </div>
      <div
        className="relative overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-[#2222220D]">
            <tr>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-[#22222280]">
                  Full name
                </p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-l pl-4 border-[#22222280]">
                  Email
                </p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-l pl-4 border-[#22222280]">
                  Phone Number
                </p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-l pl-4 border-[#22222280]">
                  Course
                </p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-l pl-4 border-[#22222280]">
                  Status
                </p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p className="font-semibold text-base text-[#222222] text-nowrap border-l pl-4 border-[#22222280]">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }).map((_, i) => (
              <tr key={i} className="border-b border-[#22222280]">
                <td className="px-6 py-4">
                  <p className="text-nowrap text-[14px] text-[#222222] font-normal">
                    Olaniyan Mutiu
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-nowrap pl-4 text-[14px] text-[#222222] font-normal">
                    olaniyanmutiu96@gmail.com
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-nowrap pl-4 text-[14px] text-[#222222] font-normal">
                    +2348153110869
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-nowrap pl-4 text-[14px] text-[#222222] font-normal">
                    First Aid CPR
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-nowrap text-center text-[14px] font-normal pl-4 bg-[#00B69B24] text-[#00B69B] px-2 py-1 rounded">
                    Completed
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex pl-4 items-center justify-center flex-nowrap gap-4">
                    <FaEdit
                      size={20}
                      role="button"
                      color="#01B3FF"
                      className="bg-[#01B3FF1A] p-0.5 cursor-pointer"
                    />
                    <FaEye
                      size={20}
                      role="button"
                      color="#8979FF"
                      className="bg-[#8979FF1A] p-0.5 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full">
        <div className="mx-auto">
          <SmartPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
