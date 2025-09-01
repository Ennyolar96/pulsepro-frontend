import { type JSX } from "react";
import { cn } from "../utils";

interface Prop {
  name: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  className?: string;
  handle?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function PrimaryButton(props: Prop) {
  const { name, rightIcon: RightIcon, className } = props;

  return (
    <button
      type={props.type}
      onClick={props.handle}
      className={cn(
        className,
        "bg-[#01B3FF] text-nowrap flex justify-center items-center border-none rounded-4xl gap-2 px-4 font-[inter-SemiBold] text-white pl-4 border-b-[1.5px] h-10 cursor-pointer"
      )}
    >
      {name}
      {RightIcon && RightIcon}
    </button>
  );
}

export function SecondaryButton(props: Prop) {
  const { name, leftIcon: LeftIcon, rightIcon: RightIcon, className } = props;

  return (
    <button
      type={props.type}
      onClick={props.handle}
      className={cn(
        className,
        "border flex text-nowrap justify-center items-center rounded-4xl gap-2 px-4 font-[inter-SemiBold] text-white pl-4 border-b-[1.5px] h-10 cursor-pointer"
      )}
    >
      {LeftIcon && LeftIcon}
      {name}
      {RightIcon && RightIcon}
    </button>
  );
}
