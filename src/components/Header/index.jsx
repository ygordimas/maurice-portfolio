import React from "react";

const Header = () => {
  return (
    <nav className="absolute top-0 right-0 w-screen flex justify-end text-white gap-4 p-2 text-4xl z-10 mr-4">
      <div>Gallery</div>
      <div>Bio</div>
      <div>Contact</div>
    </nav>
  );
};

export default Header;
