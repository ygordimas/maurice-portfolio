import React from "react";
import { exhibitions } from "../../../public/Exhibitions";
import Subtitle from "../Subtitle";

const Exhibitions = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 justify-center px-4 md:pl-40 text-5xl">
      <div className="w-[50vw] flex flex-col gap-4 md:gap-4">
        <Subtitle text="Exhibitions" />
        {exhibitions.map((exhibition) => {
          return (
            <div className="font-aileron text-[2vh]">
              <h3 className="font-aileronSemiBold tracking-wide">
                {exhibition.title}
              </h3>
              <p>{exhibition.description}</p>
              <p>{exhibition.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exhibitions;
