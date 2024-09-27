"use client";

import React, { useState } from "react";
import { artPieces } from "../../../public/ArtPieces";

import { motion } from "framer-motion";
import ListedArtwork from "../ListedArtwork";
import ArtworkModal from "../ArtworkModal";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="flex flex-col gap-4 divide-y">
        {artPieces.map((piece, index) => {
          return (
            <ListedArtwork
              key={index}
              title={piece.title}
              index={index}
              url={piece.url}
              year={piece.year}
              medium={piece.medium}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
