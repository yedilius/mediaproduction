import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileLock2, FileText, ShieldAlert } from "lucide-react";
import { investmentUse, investorRoomSections, legalDocuments } from "@/config/investor-room";
import { teamRoles } from "@/config/team";

export const metadata: Metadata = {
  title: "Investor Room",
  robots: { index: false, follow: false },
};

export default function InvestorRoomPage() {
  return (
    <main className="room-page">
      <header className="room-header">
        <Link href="/" className="text-link"><ArrowLeft size={16} /> На главную</Link>
        <span className="status-pill"><span /> Mock data · без конфиденциальных файлов</span>
      </header>

      <section className="room-hero">
        <div>
          <span className="eyebrow">Private data room foundation</span>
          <h1>Investor Room</h1>
          <p>Архитектура подготовлена для последующего подключения backend-аутентификации, разграничения доступа, журналирования и защищённого хранилища документов.</p>
        </div>
        <div className="security-card">
          <FileLock2 size={28} />
          <strong>Без frontend-пароля</strong>
          <p>Текущая версия содержит только публично безопасные mock-данные. Секреты и договоры не размещены в репозитории.</p>
        </div>
      </section>

      <section className="room-section">
        <div className="section-intro">
          <span className="eyebrow">Структура due diligence</span>
          <h2>Единый индекс материалов</h2>
        </div>
        <div className="document-grid">
          {investorRoomSections.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <FileText size={20} />
              <h3>{item}</h3>
              <p>Placeholder · данные будут добавлены после проверки доступа.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="room-section room-columns">
        <article className="room-panel">
          <span className="eyebrow">Команда</span>
          <h2>Ролевая структура</h2>
          <ul>{teamRoles.map((role) => <li key={role}>{role}</li>)}</ul>
        </article>
        <article className="room-panel">
          <span className="eyebrow">План использования инвестиций</span>
          <h2>Редактируемые категории</h2>
          <div className="investment-table">
            {investmentUse.map((item) => (
              <div key={item.category}><span>{item.category}</span><strong>{item.status}</strong></div>
            ))}
          </div>
        </article>
      </section>

      <section className="room-section legal-panel">
        <div>
          <span className="eyebrow">Юридическая инфраструктура</span>
          <h2>На этапе юридической разработки и проверки</h2>
          <p>Список ниже — планируемая документация. Он не означает, что документы уже подготовлены или прошли юридическую экспертизу.</p>
        </div>
        <div className="legal-list">
          {legalDocuments.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <aside className="security-notice">
        <ShieldAlert size={20} />
        <p>Следующий технический этап: server-side authentication, роли доступа, защищённое object storage, audit log и истекающие ссылки на документы.</p>
      </aside>
    </main>
  );
}
