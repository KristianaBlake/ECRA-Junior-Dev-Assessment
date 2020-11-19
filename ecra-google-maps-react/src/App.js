import React from "react";
// importing Google Maps 
import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
import './App.css';
import FormConainter from "./FormContainer"

// options passed to Google Maps Component end

class App extends React.Component {
  contstructor(props) {
    super(props);

  }

  componentDidMount(){

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

    // useLoadScript hook sets up the google script bc
    // it prevents us from using a script tag and activates our API key
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

  }

  // create state in props
  // add event handler -- change props, show Google API + results from Google aPI


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
        <FormConainter/>
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
