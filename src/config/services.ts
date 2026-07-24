import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "full",
    title: "Комплексное ведение",
    price: 300000,
    description: "Контент-система на месяц: от стратегии до готовых материалов.",
    features: ["20 Reels", "10 постов", "Первичное оформление страницы", "Контент-план и сценарии", "Съёмка и монтаж", "Дизайн", "Подготовка материалов к публикации"],
    featured: true,
  },
  {
    id: "content-site",
    title: "Контент + сайт",
    price: 100000,
    description: "Быстрая упаковка предложения в контент и посадочную страницу.",
    features: ["5 Reels", "Съёмка", "Монтаж", "Одностраничный сайт"],
  },
  {
    id: "target-pro",
    title: "Таргет Pro",
    price: 120000,
    description: "Рекламный цикл на 30 дней с аналитикой.",
    features: ["Таргет на 30 дней", "Taplink", "3 рекламных креатива", "Настройка", "Оптимизация", "Аналитика"],
  },
  {
    id: "target",
    title: "Чистый таргет",
    price: 70000,
    description: "Настройка и ведение рекламных кампаний.",
    features: ["Настройка таргета", "Оптимизация кампаний"],
  },
  {
    id: "target-taplink",
    title: "Таргет + Taplink",
    price: 90000,
    description: "Реклама и базовая точка конверсии.",
    features: ["Настройка таргета", "Taplink", "2 рекламных поста"],
  },
  {
    id: "profile",
    title: "Оформление страницы",
    price: 60000,
    description: "Базовая визуальная и смысловая упаковка профиля.",
    features: ["Оформление профиля", "Актуальные Stories", "Несколько постов", "Базовый визуальный стиль"],
  },
];

export const additionalServices: Service[] = [
  { id: "shoot", title: "Съёмочный день", price: 80000, pricePrefix: "от", description: "Самостоятельный production-блок.", features: ["Подготовка", "Съёмка", "Передача материалов"] },
  { id: "strategy", title: "Стратегия запуска", price: 100000, pricePrefix: "от", description: "Позиционирование и план вывода продукта.", features: ["Анализ", "Стратегия", "План запуска"] },
  { id: "website", title: "Сайт для бизнеса", price: 150000, pricePrefix: "от", description: "Конверсионный digital-инструмент.", features: ["UX-структура", "Дизайн", "Разработка"] },
];
