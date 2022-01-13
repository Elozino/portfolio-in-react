import React from 'react'

function ProjectLayout({
    projectName, projectDesc, projectImage, projectAlt, projectTool, liveSite
}) {

    return (
      <a
        href={liveSite}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "white" }}
      >
        <div className="project-card">
          <img src={projectImage} alt={projectAlt} />
          <div className="project-description">
            <div className="project-title">
              <h1>{projectName}</h1>
              <ul>
                {projectTool.map((tool, i) => {
                  return <li key={i}>{tool}</li>;
                })}
              </ul>
            </div>
            <p>{projectDesc}</p>
          </div>
        </div>
      </a>
    );
}

export default ProjectLayout