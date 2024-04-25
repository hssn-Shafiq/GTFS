import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import T1Enroute from "./Pages/T1Enroute";
import T2Performance from "./Pages/T2Performance"
// import Home from "./Pages/Home";

const ProjectRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/t1enroute" element={<T1Enroute />} />
            <Route path="/home" element={<Home/>} />
            <Route path="T2Performance" element ={< T2Performance/>}/>
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
};

export default ProjectRoutes;
