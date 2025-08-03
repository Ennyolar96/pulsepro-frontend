import { jjjj } from "../../assets";

export default function Course() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, idx) => {
        const number = String(idx + 1).padStart(2, "0");
        return (
          <div
            key={idx}
            className="border border-[#A91210] rounded-[20px] space-y-5 font-[inter-SemiBold]"
          >
            <img
              src={jjjj}
              alt="First Aid CPR Training"
              className={"w-full h-[189px] rounded-[20px] object-cover"}
            />

            <div className="space-y-4 p-5">
              <h5 className="text-[#222222] text-[20px] font-medium">
                {number}. First Aid CPR Training
              </h5>
              <p className="text-[#222222] text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione voluptates aliquid alias a ipsum. Delectus dolorum natus
                inventore, necessitatibus velit quasi iusto soluta ducimus! Aut
                saepe tempore sit quos. Atque?
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
