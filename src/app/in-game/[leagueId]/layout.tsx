import { AVAILABLE_LEAGUES } from "@/constants/home";

// Generate segments for [leagueId]
export function generateStaticParams() {
  return AVAILABLE_LEAGUES.map((league) => {
    return { leagueId: league.id.toString() };
  });
}

export const dynamicParams = false;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
