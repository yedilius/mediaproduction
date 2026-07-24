import type { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { investmentUse } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Использование инвестиций" };

export default function InvestmentPlanPage() {
  return (
    <>
      <PageHeader
        eyebrow="План бюджета"
        title="Использование инвестиций"
        description="Категории расходов привязаны к конкретной операционной задаче и ожидаемому результату."
      />
      <aside className={styles.notice}>
        <CircleAlert size={17} />
        Точные суммы будут добавлены после утверждения общей суммы инвестиций и финальной сметы.
      </aside>
      <section className={styles.sectionBlock}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Категория</th>
                <th>Назначение</th>
                <th>Сумма</th>
                <th>Доля бюджета</th>
                <th>Период</th>
                <th>Ожидаемый результат</th>
              </tr>
            </thead>
            <tbody>
              {investmentUse.map((item) => (
                <tr key={item.category}>
                  <td data-label="Категория">{item.category}</td>
                  <td data-label="Назначение">{item.purpose}</td>
                  <td data-label="Сумма">{item.amount ?? "—"}</td>
                  <td data-label="Доля бюджета">{item.share ?? "—"}</td>
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
