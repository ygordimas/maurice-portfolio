import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArtworkContext from "@/context/ArtworkContext";

const Navbar = () => {
  const { displayModal } = useContext(ArtworkContext);

  const scrollToHash = (element_id) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      {!displayModal && (
        <motion.nav className="fixed bg-gray-200  top-0 right-0 w-screen flex justify-end gap-4 p-2 text-lg md:text-2xl font-aileron z-10">
          <div className="cursor-pointer" onClick={() => scrollToHash("bio")}>
            Bio
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrollToHash("gallery")}
          >
            Gallery
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrollToHash("contact")}
          >
            Contact
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
