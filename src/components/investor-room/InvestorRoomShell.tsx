"use client";

import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FolderKanban,
  LayoutDashboard,
  ShieldCheck,
  Users,
  WalletCards,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ShinyText } from "@/components/effects/ShinyText";
import { investorRoomMeta, investorRoomNavigation } from "@/config/investor-room";
import styles from "./InvestorRoom.module.css";

const icons = [
  LayoutDashboard,
  ChartNoAxesCombined,
  WalletCards,
  FolderKanban,
  Users,
  ShieldCheck,
  BriefcaseBusiness,
] as const;

function isActive(pathname: string, href: string) {
  return href === "/investor-room" ? pathname === href : pathname.startsWith(href);
}

export function InvestorRoomShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.workspace}>
      <header className={styles.topbar}>
        <div className={styles.heading}>
          <span className={styles.mark}>MP</span>
          <div>
            <strong>
              <ShinyText
                text={investorRoomMeta.title}
                speed={3.6}
                delay={1.8}
                color="#172019"
                shineColor="#7da61d"
              />
            </strong>
            <p>{investorRoomMeta.description}</p>
          </div>
        </div>
        <div className={styles.topActions}>
          <div className={styles.updateBlock}>
            <span />
            <strong>{investorRoomMeta.status}</strong>
            <small>Обновлено: {investorRoomMeta.updatedAt}</small>
          </div>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={15} /> Вернуться на сайт
          </Link>
        </div>
      </header>

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <span className={styles.navLabel}>Материалы</span>
          <nav className={styles.nav} aria-label="Навигация Investor Room">
            {investorRoomNavigation.map((item, index) => {
              const Icon = icons[index];
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={isActive(pathname, item.href) ? styles.active : undefined}
                >
                  <Icon size={15} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className={styles.readiness}>
            <small>Версия данных</small>
            <strong>{investorRoomMeta.updatedAt}</strong>
          </div>
        </aside>

        <div className={styles.content}>
          <div className={styles.mobileNav}>
            <label>
              Раздел Investor Room
              <select value={pathname} onChange={(event) => router.push(event.target.value)}>
                {investorRoomNavigation.map((item) => (
                  <option value={item.href} key={item.href}>{item.label}</option>
                ))}
              </select>
            </label>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
