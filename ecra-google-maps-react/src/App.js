import React from "react";
// importing Google Maps 
import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
import './App.css';

import FormContainer from "./FormContainer"

// options passed to Google Maps Component end

// options passed to Google Maps Component start 

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

// this variables prevents React from rerending and
// thinking that the center is another location
const center = {
  lat: 40.633125,
  lng: -89.398529,

};


function App() {

    // useLoadScript hook sets up the google script bc
    // it prevents us from using a script tag and activates our API key
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

  return (
    <div id="main-container">
      <div id="header">

        <h2>
        Illinois Private School Search
        </h2>

        <h3>
        Enter criteria below to search for your ideal private school 
        based on <br/>
        data from The National Center for Education Statistics (NCES) 
        provided by ECRA Group HYA 
        </h3>

      </div> 

      <br/>

      <div id ="left-container">
        <FormContainer/> 
      </div>

      <div id ="right-container">

        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={7} 
          center={center}>
        </GoogleMap> 

      </div>

    </div>
  );

}

export default App;
