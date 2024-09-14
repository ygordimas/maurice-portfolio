"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/util/hooks/useMousePosition";
import Image from "next/image";

const ListedArtwork = ({ title, index, url, year, medium }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewToggle, setPreviewToggle] = useState(false);
  const mousePosition = useMousePosition();

  // console.log(mousePosition);

  const handleHover = () => {
    setPreviewUrl(url);
    setPreviewToggle(true);
  };

  const PreviewCard = ({ url }) => {
    const x = mousePosition.x;
    const y = mousePosition.y;
    return (
      <motion.div
        className="fixed bg-blue-500 opacity-1 z-40"
        style={{ top: y - 30, left: x + 30 }}
      >
        <Image
          src={url}
          alt="Portfolio Image"
          width={1040}
          height={1920}
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
        className="font-aileron w-full text-[4vh] flex gap-4 cursor-pointer pt-2 justify-between"
      >
        <div>
          <p>{index}.</p>
          <p>{title}</p>
        </div>
        <div className="text-sm flex flex-col justify-end">
          <p>{year}</p>
          <p>{medium}</p>
        </div>
      </motion.div>
      {previewToggle && <PreviewCard url={url} />}
    </>
  );
};

export default ListedArtwork;
