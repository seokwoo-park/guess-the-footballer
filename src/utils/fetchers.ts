import axios from "axios";
import { notFound } from "next/navigation";

export const fetchLeague = async (id: string) => {
  const { status, data } = await axios.get(
    `http://localhost:3000/api/leagues?leagueId=${id}`
  );

  if (status !== 200) {
    return notFound();
  }

  return data;
};
