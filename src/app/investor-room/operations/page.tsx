import type { Metadata } from "next";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { operations } from "@/config/operations";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Операционная система" };

export default function OperationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Операционная система"
        title="Процесс передается команде"
        description="Роли, регламенты и контрольные точки снижают зависимость бизнеса от одного ключевого человека."
      />
      <section className={styles.cardGrid}>
        {operations.map((operation) => (
          <article className={styles.detailCard} key={operation.title}>
            <h2>{operation.title}</h2>
            <dl className={styles.detailList}>
              {operation.items.map((item) => (
                <div key={item}>
                  <dt>Контрольный элемент</dt>
                  <dd>{item}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>
    </>
  );
}
