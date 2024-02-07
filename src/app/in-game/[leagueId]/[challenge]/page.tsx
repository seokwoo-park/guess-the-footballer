"use client";

import { useInGameData } from "@/context/InGameContext";
import React, { useEffect } from "react";
import GameOver from "./views/GameOver";
import InGame from "./views/InGame";

type Props = {};

const Playing = (props: Props) => {
  const { status } = useInGameData();

  useEffect(() => {
    const handleOnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return event.returnValue("");
    };

    window.addEventListener("beforeunload", handleOnBeforeUnload);
  }, []);

  if (status === "GAME-OVER") {
    return <GameOver />;
  }

  return <InGame />;
};

export default Playing;
