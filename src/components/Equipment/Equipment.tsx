import { equipment, equipmentText, tools } from "../../data/portfolioData";
import { Section } from "../UI/Section";
import styles from "./Equipment.module.css";

export function Equipment() {
  return (
    <Section id="equipment" tone="white" ariaLabel="Оборудование и инструменты">
      <div className={styles.header}>
        <span className={styles.kicker}>Production kit</span>
        <h2>Оборудование</h2>
        <p>
          Снимаю на понятный продакшн-набор: камера, свет, стабилизация и инструменты
          для быстрой подготовки контента под Instagram.
        </p>
      </div>
      <div className={styles.gallery}>
        {equipment.map((item) => (
          <article key={item.title} className={styles.card}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.lists}>
        <p>{equipmentText.join(" • ")}</p>
        <p>
          <strong>Инструменты:</strong> {tools.join(" • ")}
        </p>
      </div>
    </Section>
  );
}
