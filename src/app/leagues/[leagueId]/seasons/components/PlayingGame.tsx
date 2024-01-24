import { fetchLeaguePlayers } from "@/utils/fetchers";
import React from "react";

type Props = {
  leagueId: string;
  season: string;
};

const PlayingGame = async ({ leagueId, season }: Props) => {
  const response = await fetchLeaguePlayers(leagueId, season, "1");

  if (response?.status !== 201) {
    return <h1> Error, {response?.message} </h1>;
  }

  return <div>Playing Game</div>;
};

export default PlayingGame;
