"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { forecastPeriods } from "@/config/finance";
import { scenarios } from "@/config/scenarios";
import { formatCurrency } from "@/lib/format";

export function FinanceDashboard() {
  const [period, setPeriod] = useState<6 | 12 | 36>(12);
  const data = useMemo(
    () =>
      scenarios.map((scenario) => ({
        name: scenario.title,
        Выручка: scenario.revenue * period,
        Прибыль: scenario.profit * period,
      })),
    [period],
  );

  return (
    <div className="chart-card">
      <div className="chart-head">
        <div>
          <span className="eyebrow">Сценарное моделирование</span>
          <h3>Горизонт прогноза</h3>
        </div>
        <div className="segmented" aria-label="Период финансового прогноза">
          {forecastPeriods.map((item) => (
            <button
              type="button"
              className={period === item.value ? "active" : ""}
              key={item.value}
              onClick={() => setPeriod(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-wrap" aria-label="Сравнение финансовых сценариев">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
            <XAxis dataKey="name" stroke="#8e938d" tickLine={false} axisLine={false} />
            <YAxis stroke="#8e938d" tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1_000_000}M`} />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,.04)" }}
              contentStyle={{ background: "#151916", border: "1px solid #303730", borderRadius: 14 }}
              formatter={(value) => formatCurrency(Number(value))}
            />
            <Bar dataKey="Выручка" fill="#858d86" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Прибыль" fill="#c7ff3d" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
