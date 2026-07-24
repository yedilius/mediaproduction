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
            <th style={{ width: "24%" }}>Материал</th>
            <th>Краткое описание</th>
            <th style={{ width: "14%" }}>Обновление</th>
            <th style={{ width: "13%" }}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {investorDocuments.map((document) => (
            <tr key={document.title}>
              <td data-label="Материал">{document.title}</td>
              <td data-label="Описание">{document.description}</td>
              <td data-label="Обновление">{document.updatedAt}</td>
              <td data-label="Действие">
                <Link className={styles.tableAction} href={document.href}>
                  Открыть <ArrowUpRight size={13} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
