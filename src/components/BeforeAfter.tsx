"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const states = {
  before: {
    label: "До",
    items: ["Хаотичный визуал", "Нерегулярный контент", "Слабая упаковка", "Нет рекламы", "Нет Taplink или сайта", "Заявки не фиксируются", "Нет аналитики"],
  },
  after: {
    label: "После",
    items: ["Единый стиль", "Контент на месяц", "Taplink или сайт", "Рекламные креативы", "Таргет", "Фиксация заявок", "Аналитика и потенциал автоматизации"],
  },
} as const;

export function BeforeAfter() {
  const [mode, setMode] = useState<keyof typeof states>("before");
  const active = states[mode];

  return (
    <div className="before-after-shell">
      <div className="before-after-switch" role="group" aria-label="Состояние кейса до и после">
        {(Object.keys(states) as Array<keyof typeof states>).map((key) => (
          <button type="button" key={key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>
            {states[key].label}
          </button>
        ))}
      </div>
      <article className={mode === "after" ? "after-card" : "before-card"}>
        <span>{active.label}</span>
        {active.items.map((item) => (
          <p key={item}>{mode === "after" && <Check size={14} />}{item}</p>
        ))}
      </article>
    </div>
  );
}
