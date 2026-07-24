import type { InvestorInputs } from "@/types";

export const forecastPeriods = [
  { label: "6 месяцев", value: 6 },
  { label: "1 год", value: 12 },
  { label: "3 года", value: 36 },
] as const;

export const defaultInvestorInputs: InvestorInputs = {
  investment: 10000000,
  clients: 14,
  averageCheck: 300000,
  additionalOrders: 3,
  additionalAverageCheck: 150000,
  monthlyExpenses: 4050000,
  taxRate: 10,
  reserve: 300000,
  monthlyClientGrowth: 1,
  investorShare: 45,
  period: 12,
};

export const financeDisclaimer =
  "Сценарный расчет не является гарантией доходности или окупаемости. Фактический результат зависит от продаж, расходов, налогового режима и операционного исполнения.";
