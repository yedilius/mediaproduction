"use client";

import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { defaultInvestorInputs, financeDisclaimer, forecastPeriods } from "@/config/finance";
import { createProjection } from "@/lib/finance";
import { formatCurrency } from "@/lib/format";
import type { InvestorInputs } from "@/types";
import styles from "./InvestorRoom.module.css";

export function InvestorFinanceSummary() {
  const [period, setPeriod] = useState<6 | 12 | 36>(12);
  const projection = useMemo(
    () => createProjection({ ...defaultInvestorInputs, period } as InvestorInputs),
    [period],
  );
  const totals = useMemo(
    () => projection.reduce(
      (result, month) => ({
        revenue: result.revenue + month.revenue,
        netProfit: result.netProfit + month.netProfit,
        investorPayout: result.investorPayout + month.investorPayout,
        companyRemainder: result.companyRemainder + month.companyRemainder,
      }),
      { revenue: 0, netProfit: 0, investorPayout: 0, companyRemainder: 0 },
    ),
    [projection],
  );

  const metrics = [
    ["Выручка", totals.revenue],
    ["Операционные расходы", defaultInvestorInputs.monthlyExpenses * period],
    ["Чистая прибыль", totals.netProfit],
    ["Выплаты инвестору", totals.investorPayout],
    ["Остаток компании", totals.companyRemainder],
    ["Накопленные выплаты", projection.at(-1)?.accumulatedPayout ?? 0],
  ] as const;

  return (
    <>
      <div className={styles.sectionTitle}>
        <div>
          <h2>Сценарная финансовая сводка</h2>
          <p>Расчет построен на исходных данных текущей финансовой конфигурации проекта.</p>
        </div>
        <div className={styles.periodSwitch} aria-label="Период прогноза">
          {forecastPeriods.map((item) => (
            <button
              type="button"
              key={item.value}
              className={period === item.value ? styles.activePeriod : undefined}
              onClick={() => setPeriod(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.financeMetrics}>
        {metrics.map(([label, value]) => (
          <article className={styles.financeMetric} key={label}>
            <span>{label}</span>
            <strong>{formatCurrency(value)}</strong>
          </article>
        ))}
        <article className={styles.financeMetric}>
          <span>Месяц выхода на безубыточность</span>
          <strong>План: 1–2 месяца</strong>
        </article>
      </div>

      <div className={styles.financeChart}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={projection} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="roomRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c7ff3d" stopOpacity={0.32} />
                <stop offset="100%" stopColor="#c7ff3d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(226,235,225,.08)" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#778078"
              tickLine={false}
              axisLine={false}
              fontSize={10}
              tickFormatter={(value) => `${value}м`}
            />
            <YAxis
              stroke="#778078"
              tickLine={false}
              axisLine={false}
              width={44}
              fontSize={10}
              tickFormatter={(value) => `${Math.round(Number(value) / 1_000_000)}M`}
            />
            <Tooltip
              contentStyle={{ background: "#111512", border: "1px solid rgba(226,235,225,.12)", borderRadius: 10 }}
              labelFormatter={(value) => `${value}-й месяц`}
              formatter={(value) => formatCurrency(Number(value))}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Выручка"
              stroke="#c7ff3d"
              fill="url(#roomRevenue)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="netProfit"
              name="Чистая прибыль"
              stroke="#f3f5f2"
              fill="transparent"
              strokeWidth={1.4}
            />
            <Area
              type="monotone"
              dataKey="investorPayout"
              name="Выплата инвестору"
              stroke="#7f8d81"
              fill="transparent"
              strokeWidth={1.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className={styles.disclaimer}>{financeDisclaimer}</p>
    </>
  );
}
