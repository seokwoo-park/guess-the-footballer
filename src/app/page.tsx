"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {AVAILABLE_LEAGUES_TO_START.map(({ league, image, href }) => (
          <Link
            key={league}
            href={href}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image src={image} alt={league} className="rounded-t-lg" />
            <div className="flex flex-col gap-2 my-4 p-4">
              <h5 className="mb-2 md:h-16 lg:h-auto  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {league}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href={href}
                className={`${buttonVariants({
                  variant: "outline",
                  className: "bg-green-600 text-lg",
                })} w-full`}
              >
                Select
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
