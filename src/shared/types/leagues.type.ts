import { StaticImageData } from "next/image";

export type LeaguesType = "epl" | "laLiga" | "bundesliga";

export type AvailableLeaguesType = {
  country: string;
  league: string;
  image: StaticImageData;
  id: number;
};
