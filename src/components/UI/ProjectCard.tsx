import { Project } from "../../data/projects";
import { VideoCard } from "./VideoCard";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <VideoCard title={project.title} video={project.video} aspect="portrait" />
      <div className={styles.copy}>
        <span>{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
