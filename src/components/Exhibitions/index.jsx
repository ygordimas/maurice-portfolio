import React from "react";
import { exhibitions } from "../../../public/Exhibitions";

const Exhibitions = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-2 justify-center pl-40 text-5xl">
      <h1 className="">Exhibitions</h1>
      {exhibitions.map((exhibition) => {
        return (
          <div className="font-aileron text-[2vh]">
            <h3>{exhibition.title}</h3>
            <p>{exhibition.description}</p>
            <p>{exhibition.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Exhibitions;
