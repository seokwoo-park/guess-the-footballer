import React from "react";
import { InGameContextProvider } from "@/context/InGameContext";
import { AVAILABLE_CHALLENGES } from "@/constants/home";

// Generate segments for [challenge]

export function generateStaticParams() {
  return AVAILABLE_CHALLENGES.map(({ value }) => {
    return { challenge: value };
  });
}

export const dynamicParams = false;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <InGameContextProvider>{children}</InGameContextProvider>;
};

export default Layout;
