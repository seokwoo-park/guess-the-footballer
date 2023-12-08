import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   const { leagueId } = request.body;
  //   console.log(leagueId);s
  const res = await axios.get("https://dummyjson.com/products/1");

  return NextResponse.json(res.data);
}
