import { AVAILABLE_LEAGUES } from "@/constants/home";
import { InGameContextProvider } from "@/context/InGameContext";
import { notFound, useSearchParams } from "next/navigation";

export function generateStaticParams() {
  return AVAILABLE_LEAGUES.map((league) => {
    return { leagueId: league.id.toString() };
  });
}

export const dynamicParams = false;

const InGameLayout = ({ children }: { children: React.ReactNode }) => {
  return <InGameContextProvider>{children}</InGameContextProvider>;
};

export default InGameLayout;
