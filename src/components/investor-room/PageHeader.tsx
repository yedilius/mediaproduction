import { DotField } from "@/components/effects/DotField";
import styles from "./InvestorRoom.module.css";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className={styles.pageHeader}>
      <DotField className={styles.headerDots} />
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
    </header>
  );
}
