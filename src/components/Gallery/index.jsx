"use client";

import React, { useState } from "react";
import { artPieces } from "../../../public/ArtPieces";

import { motion } from "framer-motion";
import ListedArtwork from "../ListedArtwork";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-4 divide-y px-4">
      {artPieces.map((piece, index) => {
        return (
          <ListedArtwork
            title={piece.title}
            index={index}
            url={piece.url}
            year={piece.year}
            medium={piece.medium}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
