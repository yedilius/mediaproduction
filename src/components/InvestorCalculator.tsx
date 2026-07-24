"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { z } from "zod";
import { defaultInvestorInputs, financeDisclaimer } from "@/config/finance";
import { calculateBreakEvenClients, calculateMonth, createProjection, findPaybackMonth } from "@/lib/finance";
import { formatCurrency } from "@/lib/format";
import type { InvestorInputs } from "@/types";

const schema = z.object({
  investment: z.number().min(0),
  clients: z.number().int().min(0),
  averageCheck: z.number().min(1),
  additionalOrders: z.number().int().min(0),
  additionalAverageCheck: z.number().min(0),
  monthlyExpenses: z.number().min(0),
  taxRate: z.number().min(0).max(100),
  reserve: z.number().min(0),
  monthlyClientGrowth: z.number().int().min(0),
  investorShare: z.number().refine((value) => [40, 45, 50].includes(value)),
  period: z.number().refine((value) => [6, 12, 36].includes(value)),
});

type FormData = z.infer<typeof schema>;

const fields: Array<{ name: keyof FormData; label: string; suffix?: string }> = [
  { name: "investment", label: "Сумма инвестиций", suffix: "₸" },
  { name: "clients", label: "Количество клиентов" },
  { name: "averageCheck", label: "Средний чек", suffix: "₸" },
  { name: "additionalOrders", label: "Дополнительные заказы" },
  { name: "additionalAverageCheck", label: "Средний чек доп. заказа", suffix: "₸" },
  { name: "monthlyExpenses", label: "Ежемесячные расходы", suffix: "₸" },
  { name: "taxRate", label: "Налоговая нагрузка", suffix: "%" },
  { name: "reserve", label: "Обязательный резерв", suffix: "₸" },
  { name: "monthlyClientGrowth", label: "Прирост клиентов в месяц" },
];

export function InvestorCalculator() {
  const { register, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: defaultInvestorInputs,
  });
  const watched = useWatch({ control });
  const inputs = watched as InvestorInputs;
  const finance = useMemo(() => calculateMonth(inputs), [inputs]);
  const projection = useMemo(() => createProjection(inputs), [inputs]);
  const payback = useMemo(() => findPaybackMonth(projection, inputs.investment), [projection, inputs.investment]);
  const breakEven = calculateBreakEvenClients(
    inputs.monthlyExpenses,
    inputs.averageCheck,
    inputs.additionalOrders * inputs.additionalAverageCheck,
  );

  const results = [
    ["Выручка", finance.totalRevenue],
    ["Чистая прибыль", finance.netProfit],
    ["Выплата инвестору", finance.investorPayout],
    ["Остаток компании", finance.companyRemainder],
    ["Накопленные выплаты", projection.at(-1)?.accumulatedPayout ?? 0],
  ] as const;

  return (
    <div className="calculator-shell">
      <form className="calculator-form" aria-label="Параметры инвестиционного расчета">
        {fields.map((field) => (
          <label className="field" key={field.name}>
            <span>{field.label}</span>
            <span className="input-wrap">
              <input type="number" step="1" {...register(field.name, { valueAsNumber: true })} aria-invalid={Boolean(errors[field.name])} />
              {field.suffix && <em>{field.suffix}</em>}
            </span>
          </label>
        ))}
        <label className="field">
          <span>Процент выплаты инвестору</span>
          <select {...register("investorShare", { valueAsNumber: true })}>
            <option value={40}>40%</option>
            <option value={45}>45%</option>
            <option value={50}>50%</option>
          </select>
        </label>
        <label className="field">
          <span>Период расчета</span>
          <select {...register("period", { valueAsNumber: true })}>
            <option value={6}>6 месяцев</option>
            <option value={12}>1 год</option>
            <option value={36}>3 года</option>
          </select>
        </label>
      </form>

      <div className="calculator-results">
        <div className="result-grid">
          {results.map(([label, value]) => (
            <div className="result-card" key={label}>
              <span>{label}</span>
              <strong>{formatCurrency(value)}</strong>
            </div>
          ))}
          <div className="result-card accent-result">
            <span>Точка безубыточности</span>
            <strong>{breakEven} клиентов</strong>
          </div>
          <div className="result-card accent-result">
            <span>Предполагаемый срок окупаемости</span>
            <strong>{payback ? `${payback} мес.` : "За пределами периода"}</strong>
          </div>
        </div>
        <div className="projection-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projection}>
              <defs>
                <linearGradient id="payout" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c7ff3d" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#c7ff3d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
              <XAxis dataKey="month" stroke="#8e938d" tickLine={false} axisLine={false} tickFormatter={(value) => `${value}м`} />
              <YAxis stroke="#8e938d" tickLine={false} axisLine={false} tickFormatter={(value) => `${Math.round(value / 1_000_000)}M`} />
              <Tooltip
                contentStyle={{ background: "#151916", border: "1px solid #303730", borderRadius: 14 }}
                formatter={(value) => formatCurrency(Number(value))}
              />
              <Area type="monotone" dataKey="accumulatedPayout" name="Накопленные выплаты" stroke="#c7ff3d" fill="url(#payout)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="disclaimer">{financeDisclaimer}</p>
      </div>
    </div>
  );
}
