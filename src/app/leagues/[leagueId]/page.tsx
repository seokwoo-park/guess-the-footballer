import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import { fetchLeague } from "@/utils/fetchers";
import axios from "axios";
import React from "react";

export async function generateStaticParams() {
  return AVAILABLE_LEAGUES_TO_START.map(({ id }) => ({
    leagueId: id.toString(),
  }));
}

const PlayGuess = async ({ params }: { params: { leagueId: string } }) => {
  const data = await fetchLeague(params.leagueId);

  return <h1>{params.leagueId}</h1>;
};

export default PlayGuess;
