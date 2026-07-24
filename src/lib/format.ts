export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("ru-KZ", {
    style: "currency",
    currency: "KZT",
    maximumFractionDigits: 0,
  }).format(value);

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("ru-KZ", { maximumFractionDigits: 0 }).format(value);
