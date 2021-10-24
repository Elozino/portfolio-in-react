import React from 'react'

function ProjectLayout({
    projectName, projectDesc, projectImage, projectAlt, projectTool
}) {

    return (
        <section>
            <div className="project-card">
                <img src={projectImage} alt={projectAlt} />
                <div className="project-description">
                    <div className="project-title">
                        <h1>{projectName}</h1>
                        <ul>
                            <li>{projectTool}</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <p>{projectDesc}</p>
                </div>
            </div>
        </section>
    )
}

export default ProjectLayout
