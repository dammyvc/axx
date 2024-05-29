import React from 'react';
import videoSrc from '../../public/videos/Intro_Video.mp4';

const VideoComponent = () => (
  <video className='w-screen h-screen object-cover fixed top-0 left-0 z-[-2]' autoPlay playsInline muted loop>
    <source src={videoSrc} type="video/mp4" />
    
  </video>
);

export default VideoComponent;
