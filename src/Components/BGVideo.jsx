import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="video/BG.WEBM" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;