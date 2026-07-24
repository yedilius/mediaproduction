import { projects } from "../../data/projects";
import { shootVideos } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import { ProjectCard } from "../UI/ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  const shootVideoTitles = new Set(shootVideos.map((video) => video.title));
  const caseProjects = projects.filter((project) => !shootVideoTitles.has(project.title));

  return (
    <Section id="projects" tone="dark" ariaLabel="Кейсы">
      <div className={styles.heading}>
        <span>Selected work</span>
        <h2>Кейсы</h2>
      </div>
      <div className={styles.grid}>
        {caseProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
