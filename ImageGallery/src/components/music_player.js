import React, { useEffect, useRef } from "react";

// Import your audio file
export default function  MusicPlayer() {
//   // Create state
//   state =  

const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  
    return (
        <React.Fragment>
        
        {/* <audio src="./the-virgin-medieval-music-4238.mp3" type="audio/mpeg" controls autoPlay loop /> */}
        <div>
        <video
          style={{ maxWidth: "50%", width: "50px", margin: "0 auto" }}
          autoPlay
          loop
        //   muted
          controls
          alt="All the devices"
          src="./the-virgin-medieval-music-4238.mp3"
        //   src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
           ref={videoEl}
        />
      </div>
        </React.Fragment>
    
    );
}

export {MusicPlayer}