"use client";

import { FetchLeaguePlayersResponseType, PlayerDataType } from "@/shared/types";
import { initialFetchLeaguePlayers } from "@/utils/fetchers";
import { createContext, useContext, useEffect, useState } from "react";

export interface InGameContextType {
  players: PlayerDataType[] | null;
}

const InGameContext = createContext<InGameContextType>({} as InGameContextType);

export const InGameContextProvider = ({
  children,
}: // leagueId,
{
  children: React.ReactNode;
  // leagueId: string;
}) => {
  const [players, setPlayers] = useState<PlayerDataType[] | null>(null);
  const [fetchedHistory, setFetchedHistory] = useState<{
    [season: number]: number[];
  } | null>(null);

  // const getInitialFetchLeaguePlayers = async () => {
  //   const { data, season, page } = (await initialFetchLeaguePlayers(
  //     leagueId
  //   )) as FetchLeaguePlayersResponseType;
  //   console.log(data, season);

  //   setPlayers(data);
  //   setFetchedHistory({ [season]: [page] });
  // };

  // useEffect(() => {
  //   return;
  //   getInitialFetchLeaguePlayers();
  // }, []);

  return (
    <InGameContext.Provider value={{ players }}>
      {children}
    </InGameContext.Provider>
  );
};

export const useInGameData = () => {
  return useContext(InGameContext);
};
