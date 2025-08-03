interface prop {
  title: string;
  description: string;
  hascolor: boolean;
  subtitle?: string;
}
export default function SubHeading(prop: prop) {
  const { title, description, hascolor, subtitle } = prop;
  return (
    <>
      <h3 className="text-[#222222] text-[25px] md:text-[40px] font-semibold">
        {title} {hascolor && <span className="text-[#A91210]">{subtitle}</span>}
      </h3>
      <p className="text-base text-[#222222] font-medium w-full md:w-[500px]">
        {description}
      </p>
    </>
  );
}
