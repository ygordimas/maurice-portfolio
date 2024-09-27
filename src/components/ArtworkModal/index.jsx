"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { artPieces } from "../../../public/ArtPieces";
import ArtworkContext from "@/context/ArtworkContext";
import { AnimatePresence, motion } from "framer-motion";

const ArtworkModal = () => {
  const { displayModal, setDisplayModal, currentIndex } =
    useContext(ArtworkContext);
  const current = artPieces[currentIndex];
  console.log(current);

  const handleClose = () => {
    setDisplayModal(false);
  };
  return (
    <AnimatePresence>
      {displayModal && (
        <motion.div
          key="modal"
          onClick={() => handleClose()}
          className="w-screen h-screen absolute top-0 left-0"
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-full bg-gray-400 z-100 flex flex-col lg:flex-row justify-center items-center text-white"
          >
            <div className="w-3/4 lg:w-1/2 h-[90vh] relative">
              <Image
                src={current.url}
                alt="Portfolio Image"
                fill={true}
                sizes="100vh"
                style={{ objectFit: "contain" }}
                className=" h-full w-auto"
              />
            </div>

            <div className="font-aileron text-xl lg:self-end pb-[5vh] flex flex-col items-center lg:items-end">
              <p className="font-semibold">{current.title}</p>
              <p>{current.year}</p>
              <p>{current.medium}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtworkModal;
