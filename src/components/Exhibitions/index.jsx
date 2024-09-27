"use client";

import React from "react";
import { exhibitions } from "../../../public/Exhibitions";
import Subtitle from "../Subtitle";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

const Exhibitions = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className="min-h-screen w-full flex items-center px-4 md:pl-40 text-5xl">
      <div className="md:w-[50vw] flex flex-col gap-4 md:gap-4">
        <Subtitle text="Exhibitions" />
        {exhibitions.map((exhibition, index) => {
          return (
            <div key={index} className="font-aileron text-[2vh]">
              <h3 className="font-aileronSemiBold tracking-wide">
                {exhibition.title}
              </h3>
              <p>{exhibition.description}</p>
              <p>{exhibition.date}</p>
            </div>
          );
        })}
      </div>
      {isDesktop && (
        <div className="relative h-full w-auto">
          <Image
            src="/images/exhibition/prisma2.jpeg"
            alt="Prisma Gallery Exhibition 1"
            width={1125}
            height={2000}
            className=" h-[40vw] w-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Exhibitions;
