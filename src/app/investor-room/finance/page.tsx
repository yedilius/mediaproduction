import type { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import { InvestorFinanceSummary } from "@/components/investor-room/InvestorFinanceSummary";
import { PageHeader } from "@/components/investor-room/PageHeader";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Финансовая модель" };

export default function InvestorFinancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Финансовая модель"
        title="Экономика проекта"
        description="Сценарный прогноз показывает связь клиентской базы, расходов, чистой прибыли и потенциальных выплат инвестору."
      />
      <section className={styles.sectionBlock}>
        <InvestorFinanceSummary />
      </section>
      <aside className={styles.notice}>
        <CircleAlert size={17} />
        Плановый выход на точку безубыточности в течение 1–2 месяцев является ориентиром, а не гарантией.
      </aside>
    </>
  );
}
