import { Button } from "@/components/ui/button";
import { GameStatusType } from "@/shared/types";
import React from "react";

type Props = {
  gameStatusHandler: (newGameStatus: GameStatusType) => void;
};

const PendingGame = ({ gameStatusHandler }: Props) => {
  return (
    <Button onClick={() => gameStatusHandler("PLAYING")}>START GAME</Button>
  );
};

export default PendingGame;
