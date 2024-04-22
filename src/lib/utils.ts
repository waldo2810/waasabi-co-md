import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const setAuthCookie = (token: string) => {
  Cookies.set("auth_token", token, {
    expires: 2, // Expires in 7 days
    secure: true, // Transmit only over HTTPS
    sameSite: "strict", // Mitigate CSRF attacks
    // httpOnly: true, // Prevent JavaScript access
  });
};
