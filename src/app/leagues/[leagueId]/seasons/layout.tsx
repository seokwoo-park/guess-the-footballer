"use client";

import { AVAILABLE_LEAGUES } from "@/constants/home";
import { InGameContextProvider } from "@/context/InGameContext";
import { notFound, useSearchParams } from "next/navigation";

const InGameLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { leagueId: string };
}) => {
  const searchParams = useSearchParams();
  const season = searchParams.get("season");

  if (!season) notFound();

  const isValidLeagueAndSeason = AVAILABLE_LEAGUES.some(
    ({ id, availableSeasons }) =>
      id === +params.leagueId && availableSeasons.includes(+season)
  );

  if (!isValidLeagueAndSeason) notFound();

  return <InGameContextProvider>{children}</InGameContextProvider>;
};

export default InGameLayout;
