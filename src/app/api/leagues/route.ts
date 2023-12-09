import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import { getRandomNumber } from "@/utils/numbers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const leagueId = url.searchParams.get("leagueId");
  if (!leagueId) {
    return NextResponse.json({ status: 400, message: "League ID is required" });
  }

  const isValidLeagueToStart = AVAILABLE_LEAGUES_TO_START.some(
    ({ id }) => id === +leagueId
  );
  if (!isValidLeagueToStart) {
    return NextResponse.json({
      status: 400,
      message: "Invalid league ID",
    });
  }

  const randomPageNumber = getRandomNumber(1, 30);

  const API_ENDPOINT = "https://api-football-v1.p.rapidapi.com/v3/players";

  const options = {
    method: "GET",
    url: API_ENDPOINT,
    params: {
      league: leagueId,
      page: randomPageNumber,
      season: "2023",
    },
    headers: {
      "X-RapidAPI-Key": process.env.FOOTBALL_API_KEY,
      "X-RapidAPI-Host": process.env.FOOTBALL_API_HOST,
    },
  };

  const axios = require("axios");

  try {
    const res = await axios.request(options);
    console.log(res.data);
    return NextResponse.json({ status: 201, data: res.data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
