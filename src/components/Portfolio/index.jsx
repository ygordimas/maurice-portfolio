import React from "react";
import { artPieces } from "../../../public/ArtPieces";
import ArtTitle from "../ListedArtwork";
import Gallery from "../Gallery";

const Portfolio = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-2 justify-center text-5xl relative">
      <h1 className="">Portfolio</h1>
      <Gallery />
    </div>
  );
};

export default Portfolio;
