import React from "react";

function ProjectLayout({
  projectName,
  projectDesc,
  projectImage,
  projectAlt,
  projectTool,
  liveSite,
}) {
  return (
    <>
      <div className="project-card">
        <a href={liveSite} target="_blank" rel="noreferrer" className="box">
          <div className="img-box">
            <img src={projectImage} alt={projectAlt} />
          </div>
          <div className="project-description">
            <div className="project-title">
              <h1>{projectName}</h1>
              <ul>
                {projectTool.map((tool, i) => {
                  return <li key={i}>{tool}</li>;
                })}
              </ul>
            </div>
            <p className="description">{projectDesc}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default ProjectLayout;
