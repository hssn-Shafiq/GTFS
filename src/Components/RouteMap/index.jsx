import React, { useEffect, useRef } from "react";

const RouteMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
    //   script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDDCT1y6vpC4jJ3_LGzRnMF6OclbkDEfU&libraries&libraries=geometry&callback=initMap`;
      script.defer = true;
      script.async = true;
      window.initMap = initMap; // This ensures that the initMap function is available globally
      document.head.appendChild(script);
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: -25.2744, lng: 133.7751 }, // Coordinates for Australia
        zoom: 5,
      });

      map.addListener("click", function (event) {
        addMarker(event.latLng);
      });

      const markers = [];
      let polyline;

      function addMarker(location) {
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
        });
        markers.push(marker);

        updatePolyline();
      }

      function updatePolyline() {
        if (polyline) {
          polyline.setMap(null);
        }

        const path = markers.map(function (marker) {
          return marker.getPosition();
        });

        polyline = new window.google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        polyline.setMap(map);

        calculateDistance();
      }

      function calculateDistance() {
        const distance = window.google.maps.geometry.spherical.computeLength(
          polyline.getPath()
        );
        document.getElementById("routeTitle").setAttribute(
          "placeholder",
          "Distance: " + (distance / 1000).toFixed(2) + " km"
        );
      }

      function saveRoute() {
        const title = document.getElementById("routeTitle").value;
        const description = document.getElementById("routeDescription").value;

        // Here you can implement your saving logic
        console.log("Title:", title);
        console.log("Description:", description);
        console.log(
          "Coordinates:",
          markers.map(function (marker) {
            return marker.getPosition();
          })
        );
      }
    };

    loadMap();
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="section-title text-center mb-3">Route Planner</h2>
          </div>
        </div>
        <div className="row">
          <div
            id="map"
            ref={mapContainerRef}
            style={{ height: "400px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
