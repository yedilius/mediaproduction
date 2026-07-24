export const expenses = [
  { label: "2 монтажера", value: 1000000 },
  { label: "Дизайнер", value: 400000 },
  { label: "Таргетолог", value: 550000 },
  { label: "Стратег-маркетолог", value: 500000 },
  { label: "Оператор", value: 600000 },
  { label: "Сторисмейкер", value: 350000 },
  { label: "Офис", value: 350000 },
  { label: "Подписки и ПО", value: 150000 },
  { label: "Внутренний рекламный бюджет", value: 150000 },
] as const;

export const monthlyExpenses = expenses.reduce((sum, item) => sum + item.value, 0);
