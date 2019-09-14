import React, { Component } from "react";
import { Button } from "react-bootstrap";

import logo from "./logo.svg";
import "./App.css";
import ImagePreloader from "./components/ImagePreLoader";
import Uploader from "./components/File Uploader/Uploader";
import DragAndDrop from "./components/DragAndDrop";
import ImageViewer from "./components/ImageViewer";
import GeoCode from "./components/GeoCode";
import PaginationComponent from "./components/PaginationComponent";
import StepWizard from "./components/StepWizard";
import Formsample from "./components/Form";
import Campaign from "./components/StepWizard/Campaign";
import Step2 from "./components/StepWizard/Step2";
import Rating from "./components/Rating";

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

const steps = [
  {
    component: <Campaign />
  },
  {
    component: <Step2 />
  }
];

class App extends Component {
  state = {
    city: null,
    state: null,
    country: null
  };
  getDetails = (city, state, country) => {
    this.setState({
      city,
      state,
      country
    });
  };

  render() {
    const { city, state, country } = this.state;
    return (
      <div className="App">
        {/* <DragAndDrop/> */}
        {/* <ImageViewer
            imageCount={4}
            ImagesData={ImagesData}
          /> */}
        {/* <GeoCode getDetails={this.getDetails} /> */}
        {/* <div>
            <h2>Address Details</h2>
            <p>{city}</p>
            <p>{state}</p>
            <p>{country}</p>
          </div> */}
        {/* <PaginationComponent/> */}
        {/* <StepWizard steps={steps} /> */}
        {/* <Formsample/> */}
        <Rating
          size={"50px"}
          color={"red"}
          disabledColor={"lightgrey"}
          totalStars={4}
          onSelect={rating => this.setState({ rating })}
        />
      </div>
    );
  }
}

export default App;
