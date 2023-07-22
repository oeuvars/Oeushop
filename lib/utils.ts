import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "A2":
      return "A2"
    case "A3":
      return "A3"
    case "A4":
      return "A4"
    case "A5":
      return "A5"
    case "B4":
      return "B4"
    case "B5":
      return "B5"
  }
}
