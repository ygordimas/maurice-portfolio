import React, { useState } from "react";

import ArtworkContext from "./ArtworkContext";

const ArtworkProvider = ({ children }) => {
  const [currentArtwork, setCurrentArtwork] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <ArtworkContext.Provider
      value={{
        currentArtwork,
        setCurrentArtwork,
        displayModal,
        setDisplayModal,
        currentTitle,
        setCurrentTitle,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};

export default ArtworkProvider;
