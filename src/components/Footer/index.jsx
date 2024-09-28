import React from "react";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="flex text-gray-200 text-sm gap-4 bg-gray-950 flex-col items-center font-aileron px-4 md:px-40 py-20">
        <div>
          <p>© 2024 — All Rights Reserved</p>
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
        <div className=" flex gap-1 font-aileron">
          <a href="https://www.instagram.com/quanxdus/" target="_blank">
            <AiFillInstagram className="text-4xl" />
          </a>
          <a href="https://www.tiktok.com/@mquandus" target="_blank">
            <AiFillTikTok className="text-4xl" />
          </a>
        </div>
        {/* <p>© — All Rights Reserved </p>
        <p>
          Developed by{" "}
          <a
            className="underline font-semibold"
            href="https://www.instagram.com/ygordimas"
            target="_blank"
          >
            Ygor Dimas
          </a>
        </p> */}
      </div>
    </>
  );
};

export default Footer;
