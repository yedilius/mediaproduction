import styles from "./Header.module.css";

const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#experience", label: "Опыт" },
  { href: "#projects", label: "Кейсы" },
  { href: "#contact", label: "Контакты" }
];

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="На главную">
        LAIYMM
      </a>
      <nav className={styles.nav} aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className={styles.contact} href="#contact">
        Связаться
      </a>
    </header>
  );
}
