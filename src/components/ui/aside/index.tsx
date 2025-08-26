import { Link } from "react-router-dom";

export default function Aside() {
  const side = [
    { link: "dashboard", name: "Dashboard" },
    { link: "courses", name: "Courses" },
    { link: "events", name: "Events" },
    { link: "careers", name: "Careers" },
    { link: "gallery", name: "Gallery" },
    { link: "students", name: "Students" },
    { link: "staffs", name: "Staff/Tutor" },
    { link: "news", name: "News" },
  ];
  return (
    <div className="flex flex-col space-y-5">
      {side.map((item, idx) => (
        <Link
          to={item.link}
          key={idx}
          className="bg-[#A912100A] p-4 text-[#222222] border-l-4 border-l-[#A91210]"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
