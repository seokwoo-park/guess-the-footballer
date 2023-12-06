import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import React from "react";

type Props = {};

export async function generateStaticParams() {
  return AVAILABLE_LEAGUES_TO_START.map(({ path }) => ({ league: path }));
}

export const dynamicParams = false;

const Play = ({ params }: { params: { league: string } }) => {
  const { league } = params;

  return <div>Play {league}</div>;
};

export default Play;
