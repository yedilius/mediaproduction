import type { InvestorInputs, ProjectionMonth } from "@/types";

export type MonthlyFinance = {
  mainRevenue: number;
  additionalRevenue: number;
  totalRevenue: number;
  profitBeforeTax: number;
  tax: number;
  netProfit: number;
  distributableProfit: number;
  investorPayout: number;
  companyRemainder: number;
};

export function calculateMonth(inputs: InvestorInputs, clients = inputs.clients): MonthlyFinance {
  const mainRevenue = clients * inputs.averageCheck;
  const additionalRevenue = inputs.additionalOrders * inputs.additionalAverageCheck;
  const totalRevenue = mainRevenue + additionalRevenue;
  const profitBeforeTax = totalRevenue - inputs.monthlyExpenses;
  const tax = Math.max(0, profitBeforeTax) * (inputs.taxRate / 100);
  const netProfit = profitBeforeTax - tax;
  const distributableProfit = Math.max(0, netProfit - inputs.reserve);
  const investorPayout = distributableProfit * (inputs.investorShare / 100);
  const companyRemainder = netProfit - investorPayout;

  return {
    mainRevenue,
    additionalRevenue,
    totalRevenue,
    profitBeforeTax,
    tax,
    netProfit,
    distributableProfit,
    investorPayout,
    companyRemainder,
  };
}

export function createProjection(inputs: InvestorInputs): ProjectionMonth[] {
  let accumulatedPayout = 0;

  return Array.from({ length: inputs.period }, (_, index) => {
    const month = index + 1;
    const clients = inputs.clients + inputs.monthlyClientGrowth * index;
    const finance = calculateMonth(inputs, clients);
    accumulatedPayout += finance.investorPayout;

    return {
      month,
      clients,
      revenue: finance.totalRevenue,
      netProfit: finance.netProfit,
      investorPayout: finance.investorPayout,
      companyRemainder: finance.companyRemainder,
      accumulatedPayout,
    };
  });
}

export function findPaybackMonth(projection: ProjectionMonth[], investment: number): number | null {
  const month = projection.find((item) => item.accumulatedPayout >= investment);
  return month?.month ?? null;
}

export function calculateBreakEvenClients(
  monthlyExpenses: number,
  averageCheck: number,
  additionalRevenue = 0,
): number {
  if (averageCheck <= 0) return 0;
  return Math.max(0, Math.ceil((monthlyExpenses - additionalRevenue) / averageCheck));
}
