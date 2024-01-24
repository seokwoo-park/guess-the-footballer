import React from "react";
import { AVAILABLE_LEAGUES } from "@/constants/home";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return AVAILABLE_LEAGUES.map((league) => {
    return { leagueId: league.id.toString() };
  });
}

export const dynamicParams = false;

const SelectSeason = ({ params }: { params: { leagueId: string } }) => {
  const leagueData = AVAILABLE_LEAGUES.find(
    ({ id }) => id === +params.leagueId
  );

  if (!leagueData) notFound();

  return (
    <div className="">
      <h6>Select Season</h6>
      <div className="flex flex-wrap gap-4">
        {leagueData.availableSeasons.map((season) => (
          <Link
            key={season}
            className="border border-white py-4 px-8 rounded-lg"
            href={`/leagues/${params.leagueId}/seasons?season=${season}`}
          >
            {season}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectSeason;
