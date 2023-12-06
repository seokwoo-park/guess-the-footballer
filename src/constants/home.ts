import epl_logo_image from "@/assets/epl_logo.jpg";
import bundesliga_logo_image from "@/assets/bundesliga_logo.jpg";
import laLiga_logo_image from "@/assets/laLiga_logo.jpg";

export const AVAILABLE_LEAGUES_TO_START = [
  {
    league: "English Premier League",
    image: epl_logo_image,
    href: "/play?league=epl",
  },
  {
    league: "Bundesliga",
    image: bundesliga_logo_image,
    href: "/play?league=bundesliga",
  },
  {
    league: "LaLiga",
    image: laLiga_logo_image,
    href: "/play?league=laLiga",
  },
];
