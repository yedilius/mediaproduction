"use client";

import { useMemo, useState } from "react";
import { risks } from "@/config/risks";
import type { RiskLevel } from "@/types";

const levels: RiskLevel[] = ["Низкая", "Средняя", "Высокая"];
const score: Record<RiskLevel, number> = { Низкая: 1, Средняя: 2, Высокая: 3 };

export function RiskMatrix() {
  const [selected, setSelected] = useState(risks[0].id);
  const active = useMemo(() => risks.find((risk) => risk.id === selected) ?? risks[0], [selected]);

  return (
    <div className="risk-layout">
      <div className="risk-matrix" aria-label="Матрица вероятности и влияния рисков">
        <div className="matrix-axis">Влияние →</div>
        {levels.toReversed().map((probability) =>
          levels.map((impact) => {
            const cellRisks = risks.filter((risk) => risk.probability === probability && risk.impact === impact);
            const severity = score[probability] * score[impact];
            return (
              <div className={`risk-cell severity-${severity}`} key={`${probability}-${impact}`}>
                <span>{probability} / {impact}</span>
                {cellRisks.map((risk) => (
                  <button type="button" key={risk.id} className={selected === risk.id ? "active" : ""} onClick={() => setSelected(risk.id)}>
                    {risk.title}
                  </button>
                ))}
              </div>
            );
          }),
        )}
      </div>
      <article className="risk-detail">
        <span className="eyebrow">Ответственный · {active.owner}</span>
        <h3>{active.title}</h3>
        <dl>
          <div><dt>Причина</dt><dd>{active.cause}</dd></div>
          <div><dt>Вероятность / влияние</dt><dd>{active.probability} / {active.impact}</dd></div>
          <div><dt>Предупреждающие показатели</dt><dd>{active.indicators}</dd></div>
          <div><dt>Меры предотвращения</dt><dd>{active.prevention}</dd></div>
        </dl>
      </article>
    </div>
  );
}
