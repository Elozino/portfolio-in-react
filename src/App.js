import React from "react";
import AllProjects from "./component/Project/AllProjects"
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
