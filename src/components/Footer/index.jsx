import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex bg-gray-200 flex-col items-end font-aileron px-4 md:px-40 py-20">
        <p>© — All Rights Reserved </p>
        <p>
          Developed by{" "}
          <a
            className="underline font-semibold"
            href="https://www.instagram.com/ygordimas"
            target="_blank"
          >
            Ygor Dimas
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
