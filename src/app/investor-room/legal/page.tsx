import type { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { legalDocuments } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Юридические документы" };

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Юридические документы"
        title="Юридическая инфраструктура"
        description="На этапе юридической разработки и проверки."
      />
      <aside className={styles.notice}>
        <CircleAlert size={17} />
        Перечень является планом подготовки документации и не означает, что документы уже прошли юридическую экспертизу.
      </aside>
      <section className={styles.cardGrid}>
        {legalDocuments.map((document) => (
          <article className={styles.detailCard} key={document}>
            <h2>{document}</h2>
            <p><span className={styles.status}>Юридическая проверка</span></p>
          </article>
        ))}
      </section>
    </>
  );
}
