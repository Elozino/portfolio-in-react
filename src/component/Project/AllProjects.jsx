import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./project.css";
import ProjectLayout from "./Card/ProjectLayout";
import {
  projectOne,
  projectThree,
  projectTwo,
  projectFour,
  projectFive,
  projectSix,
  project1,
  project2,
  project3,
  project5,
  project6,
  project8,
  project9,
} from "./Data/ProjectData";

function AllProjects() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className="section" id="project">
        <h1 className="heading">All Projects</h1>
        <div className="project-section">
          <ProjectLayout {...project9} />
          <ProjectLayout {...project1} />
          <ProjectLayout {...project2} />
          <ProjectLayout {...projectOne} />
          <ProjectLayout {...project3} />
          <ProjectLayout {...projectFive} />
          <ProjectLayout {...projectTwo} />
          <ProjectLayout {...projectThree} />
          <ProjectLayout {...projectFour} />
          <ProjectLayout {...projectSix} />
          <ProjectLayout {...project8} />
          <ProjectLayout {...project5} />
          <ProjectLayout {...project6} />
          {/* <ProjectLayout {}/> */}
          {/* <ProjectLayout {}/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProjects;

//   <div className="btn-right">
//     // onClick={()=> alert("Work in progress")}
//     <Link to="/projects">
//       <button className="project-btn">All Project</button>
//     </Link>
//   </div>;