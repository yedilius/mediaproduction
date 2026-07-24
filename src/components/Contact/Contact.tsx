import { profile } from "../../data/portfolioData";
import { Button } from "../UI/Button";
import { Section } from "../UI/Section";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" tone="dark" ariaLabel="Контакты">
      <div className={styles.grid}>
        <div className={styles.thanks}>
          <p>Контент может быть мягким, но попадать точно в цель</p>
          <div className={styles.hearts} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h2>Спасибо за внимание</h2>
        </div>
        <aside className={styles.contacts}>
          <span>Contact</span>
          <a href="https://www.instagram.com/laiymm" target="_blank" rel="noreferrer">
            Instagram: {profile.instagram}
          </a>
          <a href="tel:+77023154140">Phone: {profile.phone}</a>
          <Button href="https://www.instagram.com/laiymm" ariaLabel="Связаться в Instagram">
            Связаться
          </Button>
        </aside>
      </div>
    </Section>
  );
}
