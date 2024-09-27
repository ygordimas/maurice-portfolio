"use client";

import React from "react";
import Subtitle from "../Subtitle";
import ContactForm from "../ContactForm";
import dynamic from "next/dynamic";
import SmallerSpinningHead from "@/components/SmallerSpinningHead";

// const DynamicSmallerSpinningHead = dynamic(
//   () => import("../components/SmallerSpinningHead"),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );

const Mailing = () => {
  return (
    <>
      <div id="contact" className="w-full px-4 md:px-40 flex flex-col mb-20 ">
        <Subtitle text="Contact" />

        <ContactForm />
        <div className="w-full px-4 py-4  md:px-20 md:py-20 bg-gray-200 flex justify-between relative">
          <div className="w-full   flex flex-col items-end md:items-start font-aileron">
            <p>quandusmaurice@gmail.com</p>
            <p>+351 964 770 260</p>
            <p>quanxdus</p>
            <p>Lisbon, Portugal</p>
          </div>
          {/* <div className="absolute  right-0 bottom-0 w-1/4 h-[60vh] order-2 mr-20">
            <SmallerSpinningHead />
          </div> */}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Mailing;
