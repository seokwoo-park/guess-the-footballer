"use client";

import { GameStatusType, PlayerDataType } from "@/shared/types";
import { createContext, useContext, useEffect, useState } from "react";

export interface InGameContextType {
  status: GameStatusType;
  statusHandler: (newGameStatus: GameStatusType) => void;
  resetGame: () => void;
  // players: PlayerDataType[] | null;
}

const InGameContext = createContext<InGameContextType>({} as InGameContextType);

export const InGameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [players, setPlayers] = useState<PlayerDataType[] | null>(null);
  const [status, setStatus] = useState<GameStatusType>("PENDING");

  const statusHandler = (newGameStatus: GameStatusType) => {
    // if (status === "PENDING" && newGameStatus !== "PLAYING") return;
    // if (status === "PLAYING" && newGameStatus !== "GAME-OVER") return;
    // if (status === "GAME-OVER" && newGameStatus !== "PENDING") return;

    setStatus(newGameStatus);
  };

  const resetGame = () => {
    setStatus("PENDING");
  };

  return (
    <InGameContext.Provider value={{ status, statusHandler, resetGame }}>
      {children}
    </InGameContext.Provider>
  );
};

export const useInGameData = () => {
  return useContext(InGameContext);
};
