// import React from 'react';

// function App() {

//   return(
//     <div>
//       <img src="../images/building1.jpg" alt="image" />

//     </div>
//   );
// }

// // export default App;
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// class App extends Component {
//   render() {
//     return (
//       <Carousel showThumbs={false} infiniteLoop={true}>
//         <div style={{ height: "200px", color: "black" }}>this is slide 1</div>
//         <div style={{ height: "200px", color: "red" }}>this is slide 2</div>
//         <div style={{ height: "200px", color: "green" }}>this is slide 3</div>
//       </Carousel>
//     );
//   }
// }

// export default App;

import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel";
import MusicPlayer from './components/music_player';

function App() {
  return (
    <div className="App">
      <CarouselComponent />
      <MusicPlayer />
      {/* <audio controls autoplay className='audio-icon'>
         <source src="./the-virgin-medieval-music-4238.mp3" type="audio/mpeg"></source>
  </audio>*/}
    </div> 
     
  );
}

export default App;

// import React from "react";
// import { Carousel } from "react-responsive-carousel";

// function App() {
//   return (
//     <Carousel>
//       <div>
//         <img src="https://via.placeholder.com/300x200" alt="slide 1" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/300x200" alt="slide 2" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/300x200" alt="slide 3" />
//         <p className="legend">Legend 3</p>
//       </div>
//     </Carousel>
//   );
// }
