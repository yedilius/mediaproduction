export const investorRoomMeta = {
  title: "Investor Room",
  description:
    "Закрытые материалы Media Production для ознакомления с бизнес-моделью, финансовым прогнозом, операционной системой и планом развития.",
  status: "Актуальная версия",
  updatedAt: "25 июля 2026",
} as const;

export const investorRoomNavigation = [
  { label: "Обзор", href: "/investor-room" },
  { label: "Финансовая модель", href: "/investor-room/finance" },
  { label: "Использование инвестиций", href: "/investor-room/investment-plan" },
  { label: "Операционная система", href: "/investor-room/operations" },
  { label: "Команда", href: "/investor-room/team" },
  { label: "Риски", href: "/investor-room/risks" },
  { label: "Портфолио", href: "/investor-room/portfolio" },
] as const;

export const investorSummary = [
  {
    title: "Производственный цикл",
    value: "1 съемочный день",
    description:
      "Организованный production-процесс создает основной объем контента клиента на месяц.",
  },
  {
    title: "Точка безубыточности",
    value: "План: 1–2 месяца",
    description:
      "За счет предварительных продаж, основных тарифов и дополнительных услуг.",
  },
  {
    title: "Основной средний чек",
    value: "300 000 ₸",
    description:
      "Комплексное ведение: 20 Reels, 10 постов, съемка, монтаж, дизайн и первичное оформление.",
  },
  {
    title: "Потенциальная выплата инвестору",
    value: "Гибкий процент",
    description:
      "Процент задается в калькуляторе и применяется только к чистой распределяемой прибыли после расходов, налогов и обязательного резерва.",
  },
] as const;

export const projectOverview = {
  title: "Media Production как масштабируемая система",
  description:
    "Проект объединяет стратегию, производство контента, продвижение и дальнейшую интеграцию IT-решений. Главное преимущество — возможность подготовить контент на месяц за один организованный съемочный день и передать готовые материалы в течение 24 часов.",
  stages: [
    "Media Production",
    "Marketing System",
    "IT Integration",
    "AI & Business Automation",
  ],
} as const;

export const investmentUse = [
  {
    category: "Команда",
    purpose: "Комплектация ключевых production- и управленческих ролей",
    period: "По плану найма",
    result: "Устойчивая производственная мощность",
  },
  {
    category: "Офис",
    purpose: "Рабочее пространство для команды и клиентских встреч",
    period: "После утверждения локации",
    result: "Единый операционный центр",
  },
  {
    category: "Оборудование",
    purpose: "Комплектование съемочного и монтажного контура",
    period: "До масштабирования производства",
    result: "Предсказуемое качество и резерв техники",
  },
  {
    category: "Продвижение и продажи",
    purpose: "Привлечение заявок, партнерства и развитие продаж",
    period: "Помесячно",
    result: "Стабильный поток квалифицированных обращений",
  },
  {
    category: "IT-инфраструктура",
    purpose: "CRM, аналитика и цифровой контур работы с клиентами",
    period: "По этапам внедрения",
    result: "Контролируемая воронка и прозрачная аналитика",
  },
  {
    category: "Подписки и сервисы",
    purpose: "Рабочее ПО для производства, коммуникаций и хранения",
    period: "Ежемесячно",
    result: "Непрерывность процессов команды",
  },
  {
    category: "Юридическое сопровождение",
    purpose: "Разработка и проверка договорной инфраструктуры",
    period: "До заключения основных соглашений",
    result: "Формализованные отношения и права сторон",
  },
  {
    category: "Операционный резерв",
    purpose: "Покрытие разрыва между запуском и устойчивой выручкой",
    period: "На старте проекта",
    result: "Снижение риска кассового разрыва",
  },
] as const;

export const investorDocuments: ReadonlyArray<{
  title: string;
  description: string;
  updatedAt: string;
  href: string;
}> = [
  {
    title: "Executive Summary",
    description: "Краткая сводка проекта, модели и плана развития",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room",
  },
  {
    title: "Финансовая модель",
    description: "Сценарный прогноз на 6, 12 и 36 месяцев",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/finance",
  },
  {
    title: "Направления использования инвестиций",
    description: "Приоритеты капитала, периоды и ожидаемый операционный результат",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/investment-plan",
  },
  {
    title: "Структура команды",
    description: "Роли, зоны ответственности и этап подключения",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/team",
  },
  {
    title: "Операционная система",
    description: "Процессы, контроль качества и база знаний",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/operations",
  },
  {
    title: "Риски",
    description: "Причины, влияние и меры предотвращения",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/risks",
  },
  {
    title: "Портфолио",
    description: "Реальные видео и материалы выполненных проектов",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/portfolio",
  },
];

export const teamDetails = [
  {
    role: "Стратег-менеджер и инициатор проекта",
    responsibility: "Бизнес-модель, направление развития и ключевые решения",
    result: "Целостная система, которую можно передавать команде",
    stage: "С момента запуска",
    status: "Основная роль",
  },
  {
    role: "Стратег-маркетолог",
    responsibility: "Маркетинговая стратегия клиентов и контроль позиционирования",
    result: "Связь контента с бизнес-задачами",
    stage: "Основной состав",
    status: "Планируемый найм",
  },
  {
    role: "Project manager",
    responsibility: "Сроки, согласования, загрузка и коммуникация",
    result: "Предсказуемое прохождение проектов",
    stage: "При росте клиентского потока",
    status: "Планируемый найм",
  },
  {
    role: "Оператор",
    responsibility: "Подготовка и проведение съемки",
    result: "Стабильное качество исходного материала",
    stage: "С первого production-цикла",
    status: "Подрядчик",
  },
  {
    role: "Монтажеры",
    responsibility: "Монтаж, титры, звук и подготовка форматов",
    result: "Своевременная выдача готовых роликов",
    stage: "По производственной загрузке",
    status: "Планируемый найм",
  },
  {
    role: "Дизайнер",
    responsibility: "Визуальная система, посты и оформление страниц",
    result: "Единый образ бренда во всех материалах",
    stage: "Основной состав",
    status: "Планируемый найм",
  },
  {
    role: "Таргетолог",
    responsibility: "Запуск, оптимизация и аналитика рекламы",
    result: "Управляемое привлечение целевых обращений",
    stage: "После подготовки контента",
    status: "Подрядчик",
  },
  {
    role: "Сторисмейкер",
    responsibility: "Stories-контент и оперативная коммуникация",
    result: "Регулярное присутствие бренда",
    stage: "По тарифу клиента",
    status: "Планируемый найм",
  },
] as const;
