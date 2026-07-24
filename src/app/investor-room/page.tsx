import { ArrowRight, ChartNoAxesCombined, FolderKanban, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { DocumentTable } from "@/components/investor-room/DocumentTable";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { projectOverview, investorSummary } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export default function InvestorRoomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Executive Summary"
        title="Обзор проекта"
        description="Ключевая информация о бизнес-модели, инвестиционной логике и готовности материалов — без длинной презентации."
      />

      <section className={styles.summaryGrid} aria-label="Ключевые показатели">
        {investorSummary.map((item) => (
          <article className={styles.summaryCard} key={item.title}>
            <span>{item.title}</span>
            <strong>{item.value}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className={styles.panelGrid}>
        <article className={styles.panel}>
          <span className={styles.eyebrow}>Бизнес-модель</span>
          <h2>{projectOverview.title}</h2>
          <p>{projectOverview.description}</p>
          <div className={styles.systemChain}>
            {projectOverview.stages.map((stage) => (
              <div key={stage}>
                <span>{stage}</span>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </article>

        <article className={styles.panel}>
          <span className={styles.eyebrow}>Быстрый доступ</span>
          <h2>Основные материалы</h2>
          <p>Разделы собраны отдельно, чтобы нужная информация открывалась без длинной прокрутки.</p>
          <div className={styles.quickLinks}>
            <Link href="/investor-room/finance">
              Финансовая модель <ChartNoAxesCombined size={15} />
            </Link>
            <Link href="/investor-room/operations">
              Операционная система <FolderKanban size={15} />
            </Link>
            <Link href="/investor-room/risks">
              Карта рисков <ShieldCheck size={15} />
            </Link>
          </div>
        </article>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionTitle}>
          <h2>Материалы и документы</h2>
          <p>Доступные материалы открываются внутри Investor Room. Неготовые действия отключены.</p>
        </div>
        <DocumentTable />
      </section>
    </>
  );
}
