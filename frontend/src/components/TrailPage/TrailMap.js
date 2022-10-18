import React, { useEffect, useRef, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";
// import { useHistory } from "react-router-dom";
import './TrailMap.css';
// import { useParams } from 'react-router-dom';
// import {getTrail} from '../../store/trail';


function TrailMap({ 
  trails, 
}) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
//   const {trailId} = useParams();
//   const trail = useSelector(getTrail(trailId));
//   let lat = 0;
//   let lng = 0;
//   console.log(trail.longitude)
//   console.log(trail.latitude)
//   let lat = trail.latitude
//   let lng = trail.longitude 
    
    // console.log(lat)
    // console.log(lng)
  // Create the map
  useEffect(() => {
    if (!map) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { 
            // lat: lat, lng: lng
          lat: -73.9937891255057,
          lng: 40.736287401994566
        }, 
        zoom: 15,
        clickableIcons: false,
        disableDefaultUI: true,
      }));
    }
  }, [mapRef, map]);

  return (
    <div ref={mapRef} className="map1">
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

