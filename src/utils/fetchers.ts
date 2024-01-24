import { FetchLeaguePlayersResponseType } from "@/shared/types";
import axios from "axios";

export const fetchLeaguePlayers = async (
  leagueId: string,
  season: string,
  page = "1"
): Promise<void | FetchLeaguePlayersResponseType> => {
  if (!leagueId || !season) return;

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/leagues?leagueId=${leagueId}&season=${season}&page=${page}`
  );

  return data;
};
