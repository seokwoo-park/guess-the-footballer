import React from "react";
import { GAME_SKILL_CATEGORIES } from "@/constants/home";
import Link from "next/link";
import { useInGameData } from "@/context/InGameContext";

type Props = {
  leagueId: string;
};

const ChallengeCategory = ({ leagueId }: Props) => {
  const { statusHandler } = useInGameData();
  return (
    <div className="">
      <h6>Challenge</h6>
      <div className="flex flex-wrap gap-4">
        {GAME_SKILL_CATEGORIES.map(({ label, value }) => (
          <Link
            key={value}
            className="border border-white py-4 px-8 rounded-lg"
            href={`/leagues/${leagueId}/playing?challenge=${value}`}
            onClick={() => statusHandler("PLAYING")}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChallengeCategory;
