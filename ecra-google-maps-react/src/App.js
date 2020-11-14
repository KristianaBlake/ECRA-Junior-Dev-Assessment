import React from "react";
import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
import './App.css';

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 40.633125,
  lng: -89.398529,

};

function App() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={7} 
        center={center}>
      </GoogleMap> 
    </div>
  );
}

export default App;
