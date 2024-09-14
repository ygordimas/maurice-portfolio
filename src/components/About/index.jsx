"use client";

import React from "react";
import Placeholder from "../Placeholder";

const About = () => {
  const width = 30;
  return (
    <div className="w-full h-[100vh] text-[2vh] flex justify-start items-center gap-2 relative font-aileron ">
      <div className="h-[80vh]">
        <div
          className={`w-[50vw] h-min pl-40 order-9999 relative flex flex-col gap-6`}
        >
          <div>
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
