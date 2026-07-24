import { PropsWithChildren } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./Section.module.css";

type SectionProps = PropsWithChildren<{
  id: string;
  tone?: "dark" | "light" | "white";
  className?: string;
  ariaLabel?: string;
}>;

export function Section({ id, tone = "dark", className = "", ariaLabel, children }: SectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={`${styles.section} ${styles[tone]} ${isVisible ? styles.visible : ""} ${className}`}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
