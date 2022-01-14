import React from 'react'
import './project.css'
import ProjectLayout from "./Card/ProjectLayout";
import { projectOne, projectThree, projectTwo, projectFour, projectFive, projectSix } from './Data/ProjectData'

function Project() {
    return (
        <div className="section" id="project">
            <h1 className='heading'>Projects</h1>
            <div className="project-section">
                <ProjectLayout {...projectOne} />
                <ProjectLayout {...projectTwo} />
                <ProjectLayout {...projectThree} />
                <ProjectLayout {...projectFour} />
                <ProjectLayout {...projectFive}/>
                <ProjectLayout {...projectSix}/>
            </div>
            <div className="btn-right">
                <a href="/">
                    <button className="project-btn" onClick={()=> alert("Work in progress")}>All Project</button>
                </a>
            </div>
        </div>
    )
}

export default Project
