import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBWOuKXU0vY3UjUAdj_xfbdU6Q3bFLWn-4",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        marginTop: "2rem",
        borderRadius: "10px",
      }}
    >
      <Maps data-aos="fade-down" />
    </div>
  );
};

export default Map;

function Maps() {
  const center = useMemo(
    () => ({
      lat: 40.191596136135345,
      lng: 44.522093841053376,
    }),
    [],
  );

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
