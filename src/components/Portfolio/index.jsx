import React from "react";
import { artPieces } from "../../../public/ArtPieces";
import ArtTitle from "../ListedArtwork";
import Gallery from "../Gallery";
import Subtitle from "../Subtitle";
import ArtworkModal from "../ArtworkModal";

const Portfolio = () => {
  return (
    <div className="min-h-screen mt-4 md:mt-0 w-full px-4 md:px-40 flex flex-col gap-8 justify-center text-5xl">
      <Subtitle text="Portfolio" />

      <Gallery />

      <ArtworkModal />
    </div>
  );
};

export default Portfolio;
