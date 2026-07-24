import type { Metadata } from "next";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { investmentUse } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Направления использования инвестиций" };

export default function InvestmentPlanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Приоритеты капитала"
        title="Направления использования инвестиций"
        description="Каждое направление капитала связано с конкретной операционной задачей, периодом и измеримым результатом."
      />
      <section className={styles.sectionBlock}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Категория</th>
                <th>Назначение</th>
                <th>Период</th>
                <th>Ожидаемый результат</th>
              </tr>
            </thead>
            <tbody>
              {investmentUse.map((item) => (
                <tr key={item.category}>
                  <td data-label="Категория">{item.category}</td>
                  <td data-label="Назначение">{item.purpose}</td>
                  <td data-label="Период">{item.period}</td>
                  <td data-label="Результат">{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
