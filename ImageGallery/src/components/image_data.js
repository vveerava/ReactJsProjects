import "../App.css";
import MusicPlayer from "./music_player";

const imageData = [
    {
      label: "Siddhi Vinayaka",
      alt: "image1",
      src: "./images/Artwork_Vinayaka.jpg"
    },
    {
      label: "Winter Season",
      alt: "image2",
      src: "./images/Artwork_Snow1.jpg"
    },
    {
      label: "Old vintage car",
      alt: "image3",
      src: "./images/Artwork_old_car.jpg"

    },
    {
      label: "A boat in the lake",
      alt: "image4",
      src: "./images/Artwork_boat.jpg"
    },
    {
        label: "Misty Morning",
        alt: "image5",
        src: "./images/Artwork_forest.jpg"
    },
    {
        label: "A fresh morning coffee",
        alt: "image6",
        src: "./images/Artwork_good_morning.jpg"
    },
    {
        label: "Mushroom world",
        alt: "image7",
        src: "./images/Artwork_mushroom_world.jpg"
    },
    {
        label: "Old style houses",
        alt: "image8",
        src: "./images/building1.jpg"
    }
  ];


const renderSlides = imageData.map((image) => (
    <div key={image.alt} className="image-box" >
      <img src={image.src} alt={image.alt} onClick={MusicPlayer} />
      <p className="image-caption"> {image.label}</p>
    </div>
));


export {imageData,renderSlides}