import { FetchLeaguePlayersResponseType, PlayerDataType } from "@/shared/types";
import axios from "axios";
import { notFound } from "next/navigation";
import { getRandomNumber } from "./numbers";

export const initialFetchLeaguePlayers = async (
  leagueId: string
): Promise<void | FetchLeaguePlayersResponseType> => {
  const INITIAL_EASY_SEASON = 2023;

  const randomPageNumber = getRandomNumber(1, 30);

  const { status, data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/leagues?leagueId=${leagueId}&page=${randomPageNumber}&season=${INITIAL_EASY_SEASON}`
  );

  if (status === 500) {
    return location.reload();
  }

  if (status !== 200) {
    return notFound();
  }

  return {
    data: data?.data,
    season: INITIAL_EASY_SEASON,
    page: randomPageNumber,
  };
};

export const fetchLeaguePlayers = async (
  id: string
): Promise<void | PlayerDataType[]> => {
  const { status, data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/leagues?leagueId=${id}`
  );

  if (status === 500) {
    return location.reload();
  }

  if (status !== 200) {
    return notFound();
  }

  return data?.data;
};
