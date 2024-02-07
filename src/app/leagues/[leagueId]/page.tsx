"use client";

import React, { useEffect } from "react";
import ChallengeCategory from "./views/ChallengeCategory";
import { useInGameData } from "@/context/InGameContext";

const OutOfGame = ({ params }: { params: { leagueId: string } }) => {
  const { status, statusHandler } = useInGameData();

  useEffect(() => {
    if (status === "PLAYING") {
      statusHandler("PENDING");
    }
  }, [status]);

  console.log(status);

  if (status === "PENDING") {
    return <ChallengeCategory leagueId={params.leagueId} />;
  }

  if (status === "GAME-OVER") {
    return <h1>GAME OVER</h1>;
  }
};

export default OutOfGame;
