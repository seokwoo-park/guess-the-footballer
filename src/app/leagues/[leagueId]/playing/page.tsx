"use client";

import { Button } from "@/components/ui/button";
import { useInGameData } from "@/context/InGameContext";
import React, { useEffect } from "react";

type Props = {};

const InGame = (props: Props) => {
  const { statusHandler } = useInGameData();
  useEffect(() => {
    const handleOnBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return event.returnValue("");
    };

    window.addEventListener("beforeunload", handleOnBeforeUnload);
  }, []);

  console.log("here");
  return (
    <div>
      <Button onClick={() => statusHandler("GAME-OVER")}>here</Button>
    </div>
  );
};

export default InGame;
