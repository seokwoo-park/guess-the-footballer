import { PlayerDataType } from "@/shared/types";
import axios from "axios";
import { notFound } from "next/navigation";

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
