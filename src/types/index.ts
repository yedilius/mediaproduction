export type Service = {
  id: string;
  title: string;
  price: number;
  pricePrefix?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type PortfolioCategory = "SMM" | "Съёмка" | "Дизайн" | "Сайты" | "Маркетинг" | "IT" | "AI и автоматизация";

export type PortfolioCase = {
  id: string;
  title: string;
  client: string;
  task: string;
  solution: string;
  image: string;
  video?: string;
  work: string[];
  result: string;
  metrics?: string;
  href?: string;
  date: string;
  category: PortfolioCategory;
};

export type RiskLevel = "Низкая" | "Средняя" | "Высокая";

export type Risk = {
  id: string;
  title: string;
  cause: string;
  probability: RiskLevel;
  impact: RiskLevel;
  indicators: string;
  prevention: string;
  owner: string;
};

export type InvestorInputs = {
  investment: number;
  clients: number;
  averageCheck: number;
  monthlyExpenses: number;
  taxRate: number;
  reserve: number;
  monthlyClientGrowth: number;
  investorShare: 40 | 45 | 50;
  period: 6 | 12 | 36;
};

export type ProjectionMonth = {
  month: number;
  clients: number;
  revenue: number;
  netProfit: number;
  investorPayout: number;
  companyRemainder: number;
  accumulatedPayout: number;
};
