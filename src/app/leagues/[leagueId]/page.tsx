import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import axios from "axios";
import React from "react";

export async function generateStaticParams() {
  return AVAILABLE_LEAGUES_TO_START.map(({ id }) => ({
    leagueId: id.toString(),
  }));
}

const PlayGuess = async ({ params }: { params: { leagueId: string } }) => {
  const { data } = await axios.get("http://localhost:3000/api");
  console.log(data);

  return <h1>{data?.title}</h1>;
};

export default PlayGuess;
