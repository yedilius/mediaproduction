import { shootDescription, shootFormats } from "../../data/services";
import { shootVideos } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import { VideoCard } from "../UI/VideoCard";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services" tone="dark" ariaLabel="Разовые съёмки">
      <div className={styles.heading}>
        <h2>Разовые съёмки</h2>
        <p>{shootDescription}</p>
      </div>
      <div className={styles.videoGrid}>
        {shootVideos.map((item) => (
          <VideoCard key={item.title} title={item.title} description={item.description} video={item.video} />
        ))}
      </div>
      <div className={styles.formats}>
        {shootFormats.map((format) => (
          <span key={format}>{format}</span>
        ))}
      </div>
    </Section>
  );
}
