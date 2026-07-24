import { expertise, profile, stats } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" tone="light" ariaLabel="Обо мне">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.kicker}>about / approach</span>
          <h2>Обо мне</h2>
          <p>{profile.about}</p>
          <p>{profile.aboutExtra}</p>
          <div className={styles.focusList} aria-label="Ключевые направления">
            {expertise.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <figure className={styles.figure}>
          <img src={profile.aboutImage} alt="Айым, SMM-специалист" loading="lazy" />
        </figure>
      </div>
      <div className={styles.stats} aria-label="Краткие факты">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
