import React from "react";
import Link from "next/link";
import { AVAILABLE_CHALLENGES } from "@/constants/home";

const SelectChallenge = ({ params }: { params: { leagueId: string } }) => {
  return (
    <div className="">
      <h6>Challenge</h6>
      <div className="flex flex-wrap gap-4">
        {AVAILABLE_CHALLENGES.map(({ label, value }) => (
          <Link
            key={value}
            className="border border-white py-4 px-8 rounded-lg"
            href={`/in-game/${params.leagueId}/${value}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectChallenge;
