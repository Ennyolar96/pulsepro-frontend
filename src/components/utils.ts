import { clsx, type ClassValue } from "clsx";
import type { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMobile = window.innerWidth <= 768;
export const isTablet = window.innerWidth <= 1024;

export const handleInputNumber = (e: ChangeEvent<HTMLInputElement>) => {
  let inputValue = e.target.value;
  inputValue = inputValue.replace(/[^0-9.]/g, "");
  e.target.value = inputValue;
};
