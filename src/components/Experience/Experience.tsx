import { experience, portraits } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section id="experience" tone="light" ariaLabel="Опыт">
      <div className={styles.grid}>
        <div>
          <h2>Experience</h2>
          <p className={styles.lead}>
            Опыт собран из практики: от сценариев и визуала до ведения коммерческих аккаунтов
            и проектной коммуникации.
          </p>
          <div className={styles.portraits} aria-label="Визуальные референсы проектов">
            {portraits.map((portrait, index) => (
              <img key={portrait} src={portrait} alt={`Портрет из портфолио ${index + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <article key={item.year} className={styles.item}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
