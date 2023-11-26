import React from 'react';
import YouTube from 'react-youtube';

const NewHeights = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };
  
  return (
    <div>
      <YouTube videoId="newheightshow" opts={opts} onReady={onReady} />
    </div>
  );
};

export default NewHeights;