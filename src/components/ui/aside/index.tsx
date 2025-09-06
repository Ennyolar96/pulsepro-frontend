import { Link } from "react-router-dom";

export default function Aside({ param }: { param: string }) {
  const side = [
    { link: "", name: "Dashboard" },
    { link: "courses", name: "Courses" },
    { link: "events", name: "Events" },
    { link: "careers", name: "Careers" },
    { link: "gallery", name: "Gallery" },
    { link: "students", name: "Students" },
    { link: "staffs", name: "Staffs" },
    { link: "blogs", name: "Blogs" },
  ];
  return (
    <div className="flex flex-col space-y-5 w-full">
      {side.map((item, idx) => {
        return (
          <Link
            to={item.link}
            key={idx}
            className={`bg-[#A912100A] p-4 text-[#222222] ${
              param === item.name.toLowerCase()
                ? "border-l-4 border-l-[#A91210]"
                : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
