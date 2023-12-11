"use client";

import LeagueSelectionCard from "@/components/LeagueSelectionCard";
import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="max-w-screen-xl mx-auto p-4 md:p-10 lg:py-10">
      <div className="flex flex-col gap-4 mb-4">
        <div className="text-lg md:text-3xl flex justify-center">
          <span>Are you ready to&nbsp;</span>
          <span className="text-[#219ebc]">Guess the Footballer&nbsp;</span>
          <span>?</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam
          eius architecto provident deserunt quos sint maxime velit accusantium
          quibusdam, harum iste reprehenderit enim excepturi consequatur nobis
          necessitatibus. Hic, similique?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam
          eius architecto provident deserunt quos sint maxime velit accusantium
          quibusdam, harum iste reprehenderit enim excepturi consequatur nobis
          necessitatibus. Hic, similique?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {AVAILABLE_LEAGUES_TO_START.map((props) => (
          <LeagueSelectionCard key={props.id} {...props} />
        ))}
      </div>
    </main>
  );
};

export default Home;
