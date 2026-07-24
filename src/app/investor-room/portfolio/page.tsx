import type { Metadata } from "next";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { portfolioCases } from "@/config/portfolio";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Портфолио" };

export default function InvestorPortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Реальные работы"
        title="Портфолио"
        description="Видео, задачи и выполненные работы перенесены из существующего портфолио без выдуманных показателей."
      />
      <section className={styles.portfolioGrid}>
        {portfolioCases.map((item) => (
          <article className={styles.portfolioCard} key={item.id}>
            <div className={styles.portfolioMedia}>
              {item.video ? (
                <video controls preload="metadata" poster={item.image}>
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : null}
            </div>
            <div className={styles.portfolioCopy}>
              <div className={styles.portfolioMeta}>
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h2>{item.title}</h2>
              <p><strong>Задача:</strong> {item.task}</p>
              <p><strong>Решение:</strong> {item.solution}</p>
              <p><strong>Работы:</strong> {item.work.join(", ")}</p>
              <p><strong>Результат:</strong> {item.result}</p>
              <p>{item.metrics}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
