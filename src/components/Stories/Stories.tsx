import { storyExamples } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import styles from "./Stories.module.css";

export function Stories() {
  return (
    <Section id="stories" tone="white" ariaLabel="Примеры историй и постов">
      <div className={styles.heading}>
        <span>Instagram content</span>
        <h2>Примеры историй и постов</h2>
        <p>
          Визуальные сетки, обложки Reels и сторис, которые можно быстро адаптировать
          под нишу, tone of voice и текущие задачи бренда.
        </p>
      </div>
      <div className={styles.grid}>
        {storyExamples.map((item) => (
          <article key={item.title} className={styles.card}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
