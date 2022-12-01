import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import './TrailMap.css';


function TrailMap({ 
  trails, 
  mapOptions = {}, 
  mapEventHandlers = {}, 
  markerEventHandlers = {}
}) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  
  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { 
          lat: 37.773972,
          lng: -122.431297
        }, 
        zoom:15,
        clickableIcons: false,
        disableDefaultUI: true,
        ...mapOptions,
      }));
    }
  }, [mapRef, map, trails]);

  return (
    <div ref={mapRef} className="map">
      Map
    </div>
  );
}

function TrailMapWrapper(props) {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <TrailMap {...props} />
    </Wrapper>
  );
}

export default TrailMapWrapper;

