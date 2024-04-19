"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPLayer = ({ youtoubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    height: "250",
    width: "340",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-4">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-2 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtoubeId}
          opts={option}
          onReady={(event) => event.target.pauseVideo()}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-2 right-4 bg-color-primary text-color-dark text-l w-32"
      >
        Watch Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPLayer;
