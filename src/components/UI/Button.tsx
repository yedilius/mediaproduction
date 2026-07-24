import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
}>;

export function Button({ href, variant = "primary", ariaLabel, children }: ButtonProps) {
  return (
    <a href={href} aria-label={ariaLabel} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}
