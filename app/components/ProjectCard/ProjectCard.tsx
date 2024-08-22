import React from "react";
import Image from "next/image";
import css from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  role: string;
  description: string;
  techStack: string[];
  linkLive: string;
  linkFrontend: string;
  linkBackend: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  type,
  role,
  techStack,
  linkLive,
  linkFrontend,
  linkBackend,
}) => {
  return (
    <div className={css.card}>
      <Image
        src={image}
        alt={title}
        width={960}
        height={600}
        className={css.projectImage}
      />
      <div className={css.cardContent}>
        <h3 className={css.projectTitle}>{title}</h3>
        <p>
          <strong>Projekt: </strong>
          {type}
        </p>
        <p>
          <strong>Rola:</strong> {role}
        </p>
        <p className={css.projectDescription}><strong> Opis: </strong> {description} </p>
        <div className={css.techStack}>
          {techStack.map((tech) => (
            <span key={tech} className={css.techItem}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <a
            href={linkLive}
            className={css.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz projekt
          </a>
          {linkFrontend !== "" && (
            <a
              href={linkFrontend}
              className={css.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz Frontend
            </a>
          )}
          {linkBackend !== "" && (
            <a
              href={linkBackend}
              className={css.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
