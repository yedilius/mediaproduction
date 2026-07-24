import type { Metadata } from "next";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { teamDetails } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Команда" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Команда"
        title="Ролевая структура"
        description="Каждая роль связана с измеримым результатом и подключается на этапе, соответствующем загрузке проекта."
      />
      <section className={styles.cardGrid}>
        {teamDetails.map((item) => (
          <article className={styles.detailCard} key={item.role}>
            <h2>{item.role}</h2>
            <dl className={styles.detailList}>
              <div><dt>Ответственность</dt><dd>{item.responsibility}</dd></div>
              <div><dt>Ключевой результат</dt><dd>{item.result}</dd></div>
              <div><dt>Этап подключения</dt><dd>{item.stage}</dd></div>
              <div><dt>Статус</dt><dd><span className={styles.status}>{item.status}</span></dd></div>
            </dl>
          </article>
        ))}
      </section>
    </>
  );
}
