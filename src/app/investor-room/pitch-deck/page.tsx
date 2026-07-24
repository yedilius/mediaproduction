import type { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import { PageHeader } from "@/components/investor-room/PageHeader";
import { pitchDeckOutline } from "@/config/investor-room";
import styles from "@/components/investor-room/InvestorRoom.module.css";

export const metadata: Metadata = { title: "Pitch Deck" };

export default function PitchDeckPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pitch Deck"
        title="Структура презентации"
        description="Содержание инвестиционной презентации собрано вокруг модели, операционного исполнения и направления масштабирования."
      />
      <aside className={styles.notice}>
        <CircleAlert size={17} />
        Финальная версия Pitch Deck находится в работе. Ниже показана актуальная структура без неподтвержденных данных.
      </aside>
      <section className={styles.deckList}>
        {pitchDeckOutline.map(([title, description]) => (
          <article className={styles.deckItem} key={title}>
            <strong>{title}</strong>
            <span>{description}</span>
          </article>
        ))}
      </section>
    </>
  );
}
