import epl_logo_image from "@/assets/epl_logo.jpg";
import bundesliga_logo_image from "@/assets/bundesliga_logo.jpg";
import laLiga_logo_image from "@/assets/laLiga_logo.jpg";
import ligue1_logo_image from "@/assets/ligue1_logo.jpg";
import serieA_logo_image from "@/assets/serieA_logo.jpg";
import mls_logo_image from "@/assets/mls_logo.jpg";
import { AvailableLeaguesType } from "@/shared/types";

export const AVAILABLE_LEAGUES: AvailableLeaguesType[] = [
  {
    country: "England",
    league: "Premier League",
    image: epl_logo_image,
    availableSeasons: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
    id: 39,
  },
  {
    country: "Germany",
    league: "Bundesliga",
    image: bundesliga_logo_image,
    id: 78,
    availableSeasons: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
  },
  {
    country: "Spain",
    league: "LaLiga",
    image: laLiga_logo_image,
    id: 140,
    availableSeasons: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
  },
  {
    country: "France",
    league: "Ligue 1",
    image: ligue1_logo_image,
    id: 61,
    availableSeasons: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
  },
  {
    country: "Italy",
    league: "Serie A",
    image: serieA_logo_image,
    id: 135,
    availableSeasons: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
  },
  {
    country: "USA",
    league: "Major League Soccer",
    image: mls_logo_image,
    id: 253,
    availableSeasons: [
      2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    ],
  },
];
