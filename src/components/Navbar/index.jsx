import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 right-0 w-screen flex justify-end gap-4 p-2 text-2xl z-10 font-aileron">
      <div>Gallery</div>
      <div>Bio</div>
      <div>Contact</div>
    </nav>
  );
};

export default Navbar;
