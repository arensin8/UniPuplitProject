// import React from "react";
// import GoogleMapReact from "google-map-react";

// const Map = () => {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };
//   return (
//     <div
//       style={{
//         height: "60vh",
//         width: "90%",
//         margin: "0 auto",
//         marginTop: "5rem",
//       }}
//     >
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       ></GoogleMapReact>
//     </div>
//   );
// };

// export default Map;

import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAc-CxsdUBLvIXqjkZZtkK2DA6aJLquK3Q",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        marginTop: "5rem",
        borderRadius: "10px",
      }}
    >
      <Maps />
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
