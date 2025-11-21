import React from "react";
import { hightlightsSlides } from '../constants/index';

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider">
            <div className="video-coursel-container">Test</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
