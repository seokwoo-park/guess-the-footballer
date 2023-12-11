import { AvailableLeaguesType } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeagueSelectionCard = ({
  id,
  league,
  country,
  image,
}: AvailableLeaguesType) => {
  return (
    <Link
      key={league}
      href={`/in-game/${id}`}
      className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-lg shadow-gray-300 dark:shadow-gray-600 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-red-800 duration-300"
    >
      <Image src={image} alt={league} className="rounded-t-lg" />
      <div className="flex flex-col p-4">
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {country}
        </p>
        <h5 className="md:h-16 lg:h-auto  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {league}
        </h5>
      </div>
    </Link>
  );
};

export default LeagueSelectionCard;
