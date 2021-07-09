
import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

import "./App.css"; 
function App() {
  const mapDiv = useRef(null) as any;
  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
       let map = new Map({
        basemap: 'streets',
        layers: [],
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map
      });

      // bonus - how many bookmarks in the webmap?
   
    }
  }, []);
    return <div className="mapDiv" ref={mapDiv} style={{height:"820px",width:"950px"}}></div>;

}

export default App;
