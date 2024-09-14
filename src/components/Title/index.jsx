import React from "react";
import Subtitle from "../Subtitle";

const Title = () => {
  return (
    <div className="flex w-full h-full absolute top-0 left-0 justify-between text-[4rem] text-white font-bebas">
      <h1
        className="absolute top-0 left-0 tracking-wide"
        // style={{ mixBlendMode: "difference" }}
      >
        maurice
      </h1>
      <h1
        className="absolute top-full right-0 -translate-y-full tracking-wide"
        // style={{ mixBlendMode: "difference" }}
      >
        quandus
      </h1>
    </div>
  );
};

export default Title;
