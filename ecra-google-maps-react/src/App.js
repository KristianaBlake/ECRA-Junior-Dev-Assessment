import React from "react";
import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";
import './App.css';

const libraries = ["places"];

function App() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      map
    </div>
  );
}

export default App;
