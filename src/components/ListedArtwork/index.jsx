"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/util/hooks/useMousePosition";
import Image from "next/image";
import ArtworkContext from "@/context/ArtworkContext";
import ArtworkModal from "../ArtworkModal";

const ListedArtwork = ({ title, index, url, year, medium, props }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewToggle, setPreviewToggle] = useState(false);
  const mousePosition = useMousePosition();
  const { displayModal, setDisplayModal, currentIndex, setCurrentIndex } =
    useContext(ArtworkContext);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setDisplayModal(true);
  };

  const handleHover = () => {
    setPreviewUrl(url);
    setPreviewToggle(true);
  };

  const PreviewCard = ({ url }) => {
    const x = mousePosition.x;
    const y = mousePosition.y;
    return (
      <motion.div
        className="fixed opacity-1 z-40"
        style={{ top: y - 30, left: x + 30 }}
      >
        <Image
          src={url}
          alt="Portfolio Image"
          width={520}
          height={960}
          className="h-[30vh] w-auto"
        />
      </motion.div>
    );
  };

  return (
    <>
      <motion.div
        onHoverStart={() => handleHover()}
        onHoverEnd={() => setPreviewToggle(false)}
        className="font-aileron w-full text-[2.6vh] flex gap-4 cursor-pointer pt-2 justify-between"
        onClick={() => handleClick(index)}
      >
        <div className="flex gap-4">
          <p className="font-aileronSemiBold">
            {index < 10 ? "0" + index : index}.
          </p>
          <p>{title}</p>
        </div>
        <div className="text-sm flex flex-col items-end justify-end">
          <p>{year}</p>
          <p>{medium}</p>
        </div>
      </motion.div>
      {previewToggle && <PreviewCard url={url} />}
      {displayModal && <ArtworkModal index={currentIndex} />}
    </>
  );
};

export default ListedArtwork;
