import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import T1Enroute from "./Pages/T1Enroute";
// import Home from "./Pages/Home";

const ProjectRoutes = () => {
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/t1enroute" element={<T1Enroute />} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
};

export default ProjectRoutes;
