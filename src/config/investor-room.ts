export type InvestorRoomStatus =
  | "Доступно"
  | "В работе"
  | "В подготовке"
  | "Юридическая проверка"
  | "Ожидает данных";

export const investorRoomMeta = {
  title: "Investor Room",
  description:
    "Закрытые материалы Media Production для ознакомления с бизнес-моделью, финансовым прогнозом, операционной системой и планом развития.",
  status: "Материалы обновляются",
  updatedAt: "25 июля 2026",
  readiness: "Основные разделы собраны",
} as const;

export const investorRoomNavigation = [
  { label: "Обзор", href: "/investor-room" },
  { label: "Финансовая модель", href: "/investor-room/finance" },
  { label: "Использование инвестиций", href: "/investor-room/investment-plan" },
  { label: "Pitch Deck", href: "/investor-room/pitch-deck" },
  { label: "Операционная система", href: "/investor-room/operations" },
  { label: "Команда", href: "/investor-room/team" },
  { label: "Риски", href: "/investor-room/risks" },
  { label: "Портфолио", href: "/investor-room/portfolio" },
  { label: "Юридические документы", href: "/investor-room/legal" },
] as const;

export const investorSummary = [
  {
    title: "Запрашиваемые инвестиции",
    value: "Сумма уточняется",
    description:
      "Финальная сумма будет сформирована после утверждения сметы, плана найма и операционного резерва.",
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
    value: "40–50%",
    description:
      "От чистой распределяемой прибыли после покрытия операционных расходов, налогов и обязательного резерва. Условия согласовываются индивидуально.",
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
    amount: null,
    share: null,
    period: "По плану найма",
    result: "Устойчивая производственная мощность",
  },
  {
    category: "Офис",
    purpose: "Рабочее пространство для команды и клиентских встреч",
    amount: null,
    share: null,
    period: "После утверждения локации",
    result: "Единый операционный центр",
  },
  {
    category: "Оборудование",
    purpose: "Комплектование съемочного и монтажного контура",
    amount: null,
    share: null,
    period: "До масштабирования производства",
    result: "Предсказуемое качество и резерв техники",
  },
  {
    category: "Продвижение и продажи",
    purpose: "Привлечение заявок, партнерства и развитие продаж",
    amount: null,
    share: null,
    period: "Помесячно",
    result: "Стабильный поток квалифицированных обращений",
  },
  {
    category: "IT-инфраструктура",
    purpose: "CRM, аналитика и цифровой контур работы с клиентами",
    amount: null,
    share: null,
    period: "По этапам внедрения",
    result: "Контролируемая воронка и прозрачная аналитика",
  },
  {
    category: "Подписки и сервисы",
    purpose: "Рабочее ПО для производства, коммуникаций и хранения",
    amount: null,
    share: null,
    period: "Ежемесячно",
    result: "Непрерывность процессов команды",
  },
  {
    category: "Юридическое сопровождение",
    purpose: "Разработка и проверка договорной инфраструктуры",
    amount: null,
    share: null,
    period: "До заключения основных соглашений",
    result: "Формализованные отношения и права сторон",
  },
  {
    category: "Операционный резерв",
    purpose: "Покрытие разрыва между запуском и устойчивой выручкой",
    amount: null,
    share: null,
    period: "На старте проекта",
    result: "Снижение риска кассового разрыва",
  },
] as const;

export const investorDocuments: ReadonlyArray<{
  title: string;
  description: string;
  status: InvestorRoomStatus;
  updatedAt: string;
  href?: string;
}> = [
  {
    title: "Executive Summary",
    description: "Краткая сводка проекта, модели и плана развития",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room",
  },
  {
    title: "Pitch Deck",
    description: "Структура инвестиционной презентации",
    status: "В работе",
    updatedAt: investorRoomMeta.updatedAt,
  },
  {
    title: "Финансовая модель",
    description: "Сценарный прогноз на 6, 12 и 36 месяцев",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/finance",
  },
  {
    title: "План использования инвестиций",
    description: "Категории бюджета и ожидаемый результат",
    status: "Ожидает данных",
    updatedAt: investorRoomMeta.updatedAt,
  },
  {
    title: "Коммерческие предложения",
    description: "Форматы услуг и условия для клиентов",
    status: "В подготовке",
    updatedAt: "—",
  },
  {
    title: "Структура команды",
    description: "Роли, зоны ответственности и этап подключения",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/team",
  },
  {
    title: "Операционная система",
    description: "Процессы, контроль качества и база знаний",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/operations",
  },
  {
    title: "Договоры",
    description: "План договорной инфраструктуры",
    status: "Юридическая проверка",
    updatedAt: "—",
  },
  {
    title: "Сметы",
    description: "Финальная оценка затрат на запуск",
    status: "Ожидает данных",
    updatedAt: "—",
  },
  {
    title: "План найма",
    description: "Последовательность подключения ролей",
    status: "В работе",
    updatedAt: investorRoomMeta.updatedAt,
  },
  {
    title: "Cash Flow",
    description: "Помесячная динамика денежных потоков",
    status: "В работе",
    updatedAt: investorRoomMeta.updatedAt,
  },
  {
    title: "Риски",
    description: "Причины, влияние и меры предотвращения",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/risks",
  },
  {
    title: "Портфолио",
    description: "Реальные видео и материалы выполненных проектов",
    status: "Доступно",
    updatedAt: investorRoomMeta.updatedAt,
    href: "/investor-room/portfolio",
  },
  {
    title: "Предложение инвестору",
    description: "Условия участия и порядок согласования",
    status: "В подготовке",
    updatedAt: "—",
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

export const pitchDeckOutline = [
  ["Проблема рынка", "Разрозненные подрядчики, задержки и отсутствие единой ответственности"],
  ["Решение", "Одна система стратегии, производства, продвижения и аналитики"],
  ["Продукт", "Повторяемые пакеты услуг с основным средним чеком 300 000 ₸"],
  ["Рынок и продажи", "Предварительные продажи, партнерства и личный бренд"],
  ["Финансовая модель", "Сценарии, расходы и плановая точка безубыточности"],
  ["Операционная модель", "Роли, стандарты, контроль качества и резерв исполнителей"],
  ["Развитие", "Переход от Media Production к IT и AI-автоматизации"],
  ["Инвестиционное предложение", "Финальные условия формируются после утверждения сметы"],
] as const;

export const legalDocuments = [
  "Договор оказания услуг",
  "Приложение с тарифом",
  "Техническое задание",
  "Акт оказанных услуг",
  "Правила согласования",
  "Условия правок",
  "Условия расторжения",
  "Передача авторских прав",
  "Разрешение на использование материалов в портфолио",
  "NDA",
  "Договоры с подрядчиками",
  "Документы по защите данных",
  "Отдельное инвестиционное соглашение",
] as const;
