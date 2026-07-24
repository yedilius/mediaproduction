import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { investorDocuments } from "@/config/investor-room";
import styles from "./InvestorRoom.module.css";

export function DocumentTable() {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Материал</th>
            <th>Краткое описание</th>
            <th style={{ width: "16%" }}>Статус</th>
            <th style={{ width: "14%" }}>Обновление</th>
            <th style={{ width: "13%" }}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {investorDocuments.map((document) => (
            <tr key={document.title}>
              <td data-label="Материал">{document.title}</td>
              <td data-label="Описание">{document.description}</td>
              <td data-label="Статус">
                <span className={`${styles.status} ${document.status === "Доступно" ? styles.available : ""}`}>
                  {document.status}
                </span>
              </td>
              <td data-label="Обновление">{document.updatedAt}</td>
              <td data-label="Действие">
                {document.href ? (
                  <Link className={styles.tableAction} href={document.href}>
                    Открыть <ArrowUpRight size={13} />
                  </Link>
                ) : (
                  <span className={styles.disabledAction}>Пока недоступно</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
