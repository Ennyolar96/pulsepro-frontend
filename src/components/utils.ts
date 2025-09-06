/* eslint-disable @typescript-eslint/no-explicit-any */
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

export function jsonToFormData(
  obj: Record<string, any>,
  fd: FormData = new FormData()
) {
  for (const [key, val] of Object.entries(obj)) {
    if (val == null) continue;

    if (val instanceof File || val instanceof Blob) {
      fd.append(key, val);
    } else if (Array.isArray(val) || typeof val === "object") {
      fd.append(key, JSON.stringify(val));
    } else {
      fd.append(key, String(val));
    }
  }
  return fd;
}
