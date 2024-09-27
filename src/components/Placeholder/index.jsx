import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Placeholder = ({ width }) => {
  return (
    <motion.div
      initial={{ opacity: 1, filter: "grayscale(100%)" }}
      whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
      transition={{ duration: 1.5 }}
      viewport={{ amount: "all" }}
      className="relative md:absolute md:h-[80vh] md:top-0 md:left-[66vw] flex justify-center items-center w-full md:w-[30vw] object-contain md:overflow-hidden md:max-h-[90vh]"
    >
      <Image
        src="/images/maurice/profile-2.jpg"
        alt="Picture of a little bitch"
        width={3024}
        height={4032}
        className="opacity-100"
      />

      <p className="p-4 text-md absolute bottom-0 right-0 z-100 text-gray-200">
        © Armana Afewerki
      </p>
    </motion.div>
  );
};

export default Placeholder;
