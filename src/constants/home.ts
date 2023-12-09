import epl_logo_image from "@/assets/epl_logo.jpg";
import bundesliga_logo_image from "@/assets/bundesliga_logo.jpg";
import laLiga_logo_image from "@/assets/laLiga_logo.jpg";
import ligue1_logo_image from "@/assets/ligue1_logo.jpg";
import serieA_logo_image from "@/assets/serieA_logo.jpg";
import mls_logo_image from "@/assets/mls_logo.jpg";
import { AvailableLeaguesType } from "@/shared/types";

export const AVAILABLE_LEAGUES_TO_START: AvailableLeaguesType[] = [
  {
    country: "England",
    league: "Premier League",
    image: epl_logo_image,
    id: 39,
  },
  {
    country: "Germany",
    league: "Bundesliga",
    image: bundesliga_logo_image,
    id: 78,
  },
  {
    country: "Spain",
    league: "LaLiga",
    image: laLiga_logo_image,
    id: 140,
  },
  {
    country: "France",
    league: "Ligue 1",
    image: ligue1_logo_image,
    id: 61,
  },
  {
    country: "Italy",
    league: "Serie A",
    image: serieA_logo_image,
    id: 135,
  },
  {
    country: "USA",
    league: "Major League Soccer",
    image: mls_logo_image,
    id: 253,
  },
];
