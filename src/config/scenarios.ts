export const scenarios = [
  { id: "conservative", title: "Консервативный", clients: 15, revenue: 4500000, profit: 450000 },
  { id: "base", title: "Базовый", clients: 20, revenue: 6000000, profit: 1950000 },
  { id: "optimistic", title: "Оптимистичный", clients: 30, revenue: 9000000, profit: 4950000 },
] as const;

export const breakEvenModels = {
  base: {
    expenses: 4050000,
    clients: 14,
    averageCheck: 300000,
    revenue: 4200000,
  },
} as const;

export const launchPlan = [
  { phase: "До запуска", items: ["Предварительные продажи", "Портфолио", "Развитие личного бренда", "Партнерства", "Первые заявки"] },
  { phase: "Первый месяц", items: ["7–9 постоянных клиентов", "Дополнительные быстрые проекты", "Проверка процессов", "Активные продажи"] },
  { phase: "Второй месяц", items: ["11–14 клиентов", "Дополнительные услуги", "Плановое достижение точки безубыточности"] },
] as const;
