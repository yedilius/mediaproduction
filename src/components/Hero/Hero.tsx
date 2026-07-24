import { profile } from "../../data/portfolioData";
import { Button } from "../UI/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Главный экран">
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.handle}>{profile.instagram} / Astana</span>
          <h1>
            <span>SMM-</span>
            <span>специалист</span>
          </h1>
          <p>{profile.hero.subtitle}</p>
          <div className={styles.actions}>
            <Button href="#projects">Смотреть кейсы</Button>
            <Button href="#contact" variant="ghost">
              Обсудить съёмку
            </Button>
          </div>
        </div>
        <figure className={styles.portrait}>
          <img src={profile.hero.image} alt="Айым, SMM-специалист" loading="eager" />
          <figcaption>visual / reels / smm</figcaption>
        </figure>
      </div>
      <a className={styles.down} href="#about" aria-label="Перейти к разделу обо мне">
        ↓
      </a>
    </section>
  );
}
