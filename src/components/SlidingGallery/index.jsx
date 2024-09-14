"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SlidingGallery = () => {
  const arrayOfImages = [
    {
      src: "/images/2/IMG_0176.jpeg",
      width: 1280,
      height: 1920,
    },
    {
      src: "/images/2/IMG_0180.jpeg",
      width: 1280,
      height: 1920,
    },
    {
      src: "/images/2/IMG_7641.jpeg",
      width: 1280,
      height: 1920,
    },
    {
      src: "/images/2/AFF5D406-F78E-4486-AE7D-CC982E1C05CD.jpeg",
      width: 1280,
      height: 1920,
    },
    {
      src: "/images/2/FA145D4A-BCF0-481E-9FBD-D47B63B0B3E4.jpeg",
      width: 1280,
      height: 1920,
    },
    {
      src: "/images/2/Lizard-2_VSCO.jpeg",
      width: 1280,
      height: 1920,
    },
  ];

  const [width, setWidth] = useState(0);
  const [modal, setModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleImageModal = (image) => {
    setImageUrl(image);
    setModal(!modal);
  };
  return (
    //carousel
    <motion.div ref={carousel} className="cursor-grab overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-2 h-screen items-center"
      >
        {arrayOfImages.map((image) => {
          return (
            <motion.div
              className="h-[40rem] min-w-[30rem] p-10 relative cursor-pointer"
              onClick={() => handleImageModal(image)}
            >
              <Image src={image.src} fill={true} className="object-cover" />
            </motion.div>
          );
        })}
      </motion.div>
      {modal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-red-400">
          <div className="relative h-full">
            <Image src={imageUrl.src} fill objectFit="contain" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SlidingGallery;
