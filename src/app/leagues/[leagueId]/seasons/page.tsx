"use client";

import { GameStatusType } from "@/shared/types";
import React, { useState } from "react";
import PendingGame from "./components/PendingGame";
import PlayingGame from "./components/PlayingGame";
import { useSearchParams } from "next/navigation";

const InGame = ({ params }: { params: { leagueId: string } }) => {
  const searchParams = useSearchParams();
  const season = searchParams.get("season");

  const [gameStatus, setGameStatus] = useState<GameStatusType>("PENDING");

  const gameStatusHandler = (newGameStatus: GameStatusType) => {
    if (gameStatus === "PENDING" && newGameStatus !== "PLAYING") return;
    if (gameStatus === "PLAYING" && newGameStatus !== "GAME-OVER") return;
    if (gameStatus === "GAME-OVER" && newGameStatus !== "PENDING") return;

    setGameStatus(newGameStatus);
  };

  if (gameStatus === "PENDING") {
    return <PendingGame gameStatusHandler={gameStatusHandler} />;
  }
  if (gameStatus === "GAME-OVER") {
    return <h1>GAME OVER</h1>;
  }

  return (
    <div>
      <PlayingGame leagueId={params.leagueId} season={season!} />
    </div>
  );
};

export default InGame;
