import React from "react";
import "./project.css";
import ProjectLayout from "./Card/ProjectLayout";
import {
  projectOne,
  projectThree,
  projectTwo,
  projectFour,
  projectFive,
  project9,
  project1,
  project2,
} from "./Data/ProjectData";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="section" id="project">
      <h1 className="heading">Projects</h1>
      <div className="project-section">
        <ProjectLayout {...project9} />
        <ProjectLayout {...project1} />
        <ProjectLayout {...project2} />
        <ProjectLayout {...projectOne} />
        <ProjectLayout {...projectTwo} />
        <ProjectLayout {...projectThree} />
        <ProjectLayout {...projectFour} />
        <ProjectLayout {...projectFive} />
      </div>
      <div className="btn-right">
        {/* // onClick={()=> alert("Work in progress")} */}
        <Link to="/projects">
          <button className="project-btn">All Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
