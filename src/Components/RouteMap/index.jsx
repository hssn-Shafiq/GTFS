import React, { useState, useEffect } from "react";
import "./map.css"
const RouteMap = () => {
  const [map, setMap] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [viewOption, setViewOption] = useState("Map");

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDDCT1y6vpC4jJ3_LGzRnMF6OclbkDEfU&libraries=geometry,drawing`;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const google = window.google;
    const mapOptions = {
      center: { lat: -25.344, lng: 131.036 }, // Center of Australia
      zoom: 4,
      mapTypeId: viewOption === "Satellite" ? "satellite" : "roadmap",
    };
    const newMap = new google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );
    setMap(newMap);

    // Add drawing manager for routes
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYLINE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYLINE],
      },
      polylineOptions: {
        clickable: true,
        editable: true,
        strokeColor: "#FF0000",
      },
    });
    drawingManager.setMap(newMap);

    // Add event listeners for drawing manager
    google.maps.event.addListener(
      drawingManager,
      "overlaycomplete",
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYLINE) {
          const newRoute = event.overlay.getPath().getArray();
          setRoutes([...routes, newRoute]);
          const distance = calculateDistance(newRoute);
          setTotalDistance(totalDistance + distance);
        }
      }
    );
  };

  const calculateDistance = (path) => {
    const google = window.google;
    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
      distance += google.maps.geometry.spherical.computeDistanceBetween(
        path[i],
        path[i + 1]
      );
    }
    return distance / 1000; // Convert to kilometers
  };

  const changeViewOption = (option) => {
    setViewOption(option);
    if (map) {
      map.setMapTypeId(option === "Satellite" ? "satellite" : "roadmap");
    }
  };

  return (
    <div className="map-container container">
      <div class="row mb-5 justify-content-center aos-init aos-animate" data-aos="fade-right"><div class="col-lg-6 text-center"><h2 class="section-title text-center mb-3 aos-init aos-animate" data-aos="fade-up">Route Planner</h2></div></div>
      <div className="row flex-wrap  d-flex justify-content-around align-items-center ">
        <div className="col-md-6  my-4">
          <h3>View Options:</h3>
          <button onClick={() => changeViewOption("Map")} className="btn btn-outline-dark  ">Map</button>
          <button onClick={() => changeViewOption("Hybrid")} className="btn btn-outline-info  ">Hybrid</button>
          <button onClick={() => changeViewOption("Satellite")} className="btn btn-outline-danger  ">
            Satellite
          </button>
          <button onClick={() => changeViewOption("Terrain")} className="btn btn-outline-success " >Terrain</button>
        </div>
        <div className="col-md-6 my-4">
        <h3>
          Total Distance:{" "}
        </h3>
        <input
            type="text"
            disabled
            value={`${totalDistance.toFixed(2)} km`}
          />
        </div>
        
      </div>
      <div id="map" style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default RouteMap;
