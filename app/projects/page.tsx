import React from "react";
import css from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projectsData } from "../lib/data";

export default function ProjectsPage() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.titlePage}>Projekty</h1>
        <div className={css.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              linkLive={project.links.live}
              linkFrontend={project.links.frontend}
              linkBackend={project.links.backend}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
