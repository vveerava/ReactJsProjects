//import React, { useState } from "react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-bootstrap/Carousel';
import {renderSlides} from "./image_data";

export default function CarouselComponent() {
    // const [currentIndex, setCurrentIndex] = useState();
    // function handleChange(index) {
    //   setCurrentIndex(index);
    // // }
    // onSwipeStartEvent = () => {
    //     console.log('onSwipeStart Event Triggered');
    // };
    return (
        

        <div class="carousel-wrapper">
 
            <div className="top-header"><p > Thanks for checking out my artwork. <br></br>            Please email your comments to vveerava@gmail.com</p></div>

            <Carousel fade infiniteLoop useKeyboardArrows autoPlay interval="4000" showThumbs={true} transitionTime="2000" dynamicHeight={false} >
                                {/* onSwipeStart={onSwipeStartEvent} >  */}
            { /*selectedItem={imageData[currentIndex-1]} onChange={handleChange}*/}
                <div class="carousel-caption">
                    <h1>Digital Arts</h1>
                    <p className="artist"> Venkata Giridhar V (vveerava@gmail.com)</p>
                </div> 
               
                {/* <div>
                    <img src="./images/Artwork_Vinayaka.jpg" className ="image_caption" Siddhi Vinayaka />
                </div>
                <div>
                    <img src="./images/Artwork_Snow1.jpg" />
                </div>
                <div>
                    <img src="./images/Artwork_old_car.jpg" />
                </div>
                <div>
                    <img src="./images/Artwork_boat.jpg" />

                 </div>
                <div>
                    <img src="./images/Artwork_forest.jpg" />
                </div>
                <div>
                    <img src="./images/Artwork_good_morning.jpg" />
                </div>
                <div>
                    <img src="./images/Artwork_mushroom_world.jpg" />
                </div>
                <div>
                    <img src="./images/building1.jpg" />
                </div> */}
                {renderSlides}
                

            </Carousel>
              
        
        </div>
    );
}