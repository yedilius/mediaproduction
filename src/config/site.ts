export const siteConfig = {
  name: "Media Production",
  description:
    "Media Production нового поколения: стратегия, контент, продвижение и дальнейшая интеграция IT-решений в одной системе.",
  role: "Стратег-менеджер и инициатор проекта",
  roleDescription:
    "Практический опыт в маркетинге, создании контента, разработке цифровых продуктов и full-cycle IT. Задача стратег-менеджера — выстроить систему, которую можно передавать командам и масштабировать без зависимости от одного исполнителя.",
  offer: "Месяц контента за один съемочный день",
  delivery: "Готовые материалы передаются клиенту в течение 24 часов",
  navigation: [
    { label: "Модель", href: "#model" },
    { label: "Финансы", href: "#finance" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Investor Room", href: "/investor-room" },
  ],
  contact: {
    email: "hello@placeholder.kz",
    note: "Контактные данные будут уточнены перед публикацией.",
  },
} as const;

export const heroMetrics = [
  { value: "1", label: "съемочный день" },
  { value: "24 часа", label: "до передачи материалов" },
  { value: "20", label: "Reels в основном пакете" },
  { value: "300 000 ₸", label: "средний чек основного тарифа" },
] as const;
