import React from "react";

import logo from "./logo.svg";
import "./App.css";
import ImagePreloader from "./components/ImagePreLoader";
import Uploader from "./components/File Uploader/Uploader";
import DragAndDrop from "./components/DragAndDrop";
import ImageViewer from "./components/ImageViewer";

const ImagesData = [
  {
    imageURL:
      "https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2695682/pexels-photo-2695682.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2752783/pexels-photo-2752783.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2715014/pexels-photo-2715014.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2690765/pexels-photo-2690765.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg"
  },
  {
    imageURL: "https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/1893040/pexels-photo-1893040.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg"
  },
  {
    imageURL:
      "https://images.pexels.com/photos/1654698/pexels-photo-1654698.jpeg"
  }
];

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop/> */}
      <ImageViewer
        imageCount={4}
        ImagesData={ImagesData}
      />
    </div>
  );
}

export default App;
