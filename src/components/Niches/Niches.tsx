import { niches } from "../../data/niches";
import { Section } from "../UI/Section";
import styles from "./Niches.module.css";

export function Niches() {
  return (
    <Section id="niches" tone="dark" ariaLabel="Ниши">
      <div className={styles.heading}>
        <span>Ну на этом всё</span>
        <h2>Ниши, с которыми я работала:</h2>
      </div>
      <div className={styles.grid}>
        {niches.map((niche) => (
          <span key={niche} className={styles.chip}>
            {niche}
          </span>
        ))}
      </div>
    </Section>
  );
}
