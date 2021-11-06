import React from 'react'
import './project.css'
import ProjectCard from './Card/ProjectCard'
import { projectOne, projectThree, projectTwo, projectFour, projectFive, projectSix } from './Data/ProjectData'

function Project() {
    return (
        <div className="section" id="project">
            <h1>Projects</h1>
            <div className="project-section">
                <ProjectCard {...projectOne} />
                <ProjectCard {...projectTwo} />
                <ProjectCard {...projectThree} />
                <ProjectCard {...projectFour} />
                <ProjectCard {...projectFive}/>
                <ProjectCard {...projectSix}/>
            </div>
            <div className="btn-right">
                <a href="./AllProject.jsx">
                    <button className="project-btn">All Project</button>
                </a>
            </div>
        </div>
    )
}

export default Project
