import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import { getRandomNumber } from "@/utils/numbers";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const leagueId = url.searchParams.get("leagueId");
  if (!leagueId) {
    return NextResponse.json({ status: 400, message: "League ID is required" });
  }

  const leagueToStart = AVAILABLE_LEAGUES_TO_START.find(
    ({ id }) => id === +leagueId
  );

  if (!leagueToStart) {
    return NextResponse.json({
      status: 400,
      message: "Invalid league ID",
    });
  }

  const randomPageNumber = getRandomNumber(1, 30);
  const firstSeasonElement = leagueToStart.availableSeason[0];
  const latestSeasonElement = leagueToStart.availableSeason.at(-1)!;
  const randomSeason = getRandomNumber(firstSeasonElement, latestSeasonElement);

  const API_ENDPOINT = "https://api-football-v1.p.rapidapi.com/v3/players";

  const options = {
    method: "GET",
    url: API_ENDPOINT,
    params: {
      league: leagueId,
      page: randomPageNumber,
      season: randomSeason,
    },
    headers: {
      "X-RapidAPI-Key": process.env.FOOTBALL_API_KEY,
      "X-RapidAPI-Host": process.env.FOOTBALL_API_HOST,
    },
  };

  try {
    const res = await axios.request(options);
    return NextResponse.json({ status: 201, data: res.data.response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
