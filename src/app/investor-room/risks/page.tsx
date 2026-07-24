import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { risks } from "@/config/risks";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Риски" };

export default function RisksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Управление рисками"
        title="Риски и предотвращение"
        description="Для каждого риска определены причина, вероятность, влияние, превентивная мера и ответственная роль."
      />
      <section className={styles.accordion}>
        {risks.map((risk) => (
          <details key={risk.id}>
            <summary>
              {risk.title}
              <span>Вероятность: {risk.probability}</span>
              <span>Влияние: {risk.impact}</span>
              <ChevronDown size={15} />
            </summary>
            <div className={styles.accordionContent}>
              <div><small>Возможная причина</small><p>{risk.cause}</p></div>
              <div><small>Меры предотвращения</small><p>{risk.prevention}</p></div>
              <div><small>Ответственный</small><p>{risk.owner}</p></div>
            </div>
          </details>
        ))}
      </section>
    </>
  );
}
