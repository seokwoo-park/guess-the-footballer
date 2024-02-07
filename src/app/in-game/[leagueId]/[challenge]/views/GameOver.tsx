"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInGameData } from "@/context/InGameContext";

type Props = {};

const GameOver = (props: Props) => {
  const { resetGame } = useInGameData();

  return (
    <div className="flex flex-col gap-5">
      <h1>GAME OVER</h1>
      <Button onClick={resetGame}>RETRY</Button>
      <Button asChild>
        <Link href="/">Select challenge</Link>
      </Button>
      <Button asChild>
        <Link href="/">Select League</Link>
      </Button>
    </div>
  );
};

export default GameOver;
