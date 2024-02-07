import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { AVAILABLE_LEAGUES } from "@/constants/home";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const leagueId = url.searchParams.get("leagueId");
  const season = url.searchParams.get("season");
  const page = url.searchParams.get("page");

  if (!leagueId) {
    return NextResponse.json({ status: 400, message: "League ID is required" });
  }
  if (!season) {
    return NextResponse.json({ status: 400, message: "Season is required" });
  }
  if (!page) {
    return NextResponse.json({ status: 400, message: "Page is required" });
  }

  const isValidToFetch = AVAILABLE_LEAGUES.some(
    ({ id, availableSeasons: availableSeason }) =>
      id === +leagueId && availableSeason.includes(+season)
  );

  if (!isValidToFetch) {
    return NextResponse.json({
      status: 400,
      message: "Invalid league ID or Season",
    });
  }

  const API_ENDPOINT = "https://api-football-v1.p.rapidapi.com/v3/players";

  const options = {
    method: "GET",
    url: API_ENDPOINT,
    params: {
      league: leagueId,
      page,
      season,
    },
    headers: {
      "X-RapidAPI-Key": process.env.FOOTBALL_API_KEY,
      "X-RapidAPI-Host": process.env.FOOTBALL_API_HOST,
    },
  };

  try {
    const { data } = await axios.request(options);

    if (!data?.results)
      return NextResponse.json({
        status: 400,
        // Error on API provider side
        message: "Sorry, error on the server. please try later again.",
      });

    if (!!data?.message?.length)
      return NextResponse.json({
        status: 400,
        // Failed to fetch API error
        message: "Sorry, error on the server. please try later again.",
      });

    return NextResponse.json({
      status: 201,
      data: data.response,
      paging: data.paging,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 400,
      message: "Sorry, something went wrong. please try again later.",
    });
  }
}
