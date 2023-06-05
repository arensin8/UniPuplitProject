import React from "react";
import GoogleMapReact from 'google-map-react'

const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div style={{ height: '60vh', width: '90%' , margin: '0 auto', marginTop:'5rem'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      
    </GoogleMapReact>
  </div>
  );
};

export default Map;
