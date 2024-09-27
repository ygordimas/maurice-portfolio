"use client";

import React, { useState, useRef } from "react";
import Placeholder from "../Placeholder";
import Subtitle from "../Subtitle";

const About = () => {
  const width = 30;
  return (
    <div
      id="bio"
      className="w-full min-h-[100vh] text-[2.2vh] flex justify-start items-center mt-20 gap-2 relative font-aileron px-4 md:px-0"
    >
      <div className="md:min-h-[80vh] ">
        <div className="md:w-[50vw] md:min-h-[100vh] md:pl-40 relative flex flex-col gap-3 md:gap-6">
          <Subtitle text="Biography" />
          <div className="">
            Born in The Netherlands but with roots coming from Aruba, Maurice
            began his artistic journey in the summer of 2020 when he decided to
            move from The Netherlands to Portugal.
          </div>
          <div>
            As a kid Maurice has always been interested in all forms of art
            whether it was music, painting or dance, he has done it all.
          </div>
          <div>
            Fast forward to 2024 Maurice has developed his very own style and
            has had various exhibitions around the country.
          </div>
          <div>“Expression and emotion are enough to tell a story”</div>
          <div>
            A quote he lives by as his work is centred around the face. Never
            referenced and always in the moment, Maurice creates dream like
            figures sometimes one more comforting than the other.
          </div>

          <Placeholder width={40} />
        </div>
      </div>
    </div>
  );
};

export default About;
