import React from "react";
import Image from "next/image";

const Placeholder = ({ width }) => {
  return (
    <div
      className={`absolute h-[80vh] top-0 left-[66vw] flex justify-center items-center w-[30vw] object-contain overflow-hidden max-h-[90vh] `}
    >
      <Image
        src="/images/maurice/profile-2.jpg"
        alt="Picture of a little bitch"
        width={3024}
        height={4032}
        className="opacity-100"
      />
    </div>
  );
};

export default Placeholder;
