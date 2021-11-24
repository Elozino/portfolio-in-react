import React from 'react'

function ProjectLayout({
    projectName, projectDesc, projectImage, projectAlt, projectTool, liveSite
}) {

    return (
        <a href={liveSite} target="_blank" rel="noreferrer" style={{ "text-decoration": "white" }}>
            <div className="project-card">
                <img src={projectImage} alt={projectAlt} />
                <div className="project-description">
                    <div className="project-title">
                        <h1>{projectName}</h1>
                        <ul>
                            {projectTool.map(tool => {
                                return (<li>{tool}</li>)
                            })}
                        </ul>
                    </div>
                    <p>{projectDesc}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectLayout
