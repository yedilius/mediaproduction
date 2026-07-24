export type SceneStateId = "production" | "pipeline" | "finance" | "automation";

export type SceneState = {
  id: SceneStateId;
  selector: string;
  label: string;
  caption: string;
  modules: readonly string[];
  corePosition: readonly [number, number, number];
  coreScale: number;
  cardPositions: readonly (readonly [number, number, number])[];
  cardRotations: readonly (readonly [number, number, number])[];
  barHeights: readonly number[];
};

const flatRotations = Array.from({ length: 6 }, () => [0, 0, 0] as const);

export const sceneStates: readonly SceneState[] = [
  {
    id: "production",
    selector: ".hero",
    label: "Content Production OS",
    caption: "Стратегия превращается в готовые media-форматы",
    modules: ["Strategy", "Shoot", "Edit", "Design", "Publish", "Analytics"],
    corePosition: [0, 0, 0],
    coreScale: 1,
    cardPositions: [
      [-2.15, 0.95, -0.3],
      [-1.35, -1.25, 0.25],
      [0, 1.75, -0.5],
      [1.45, 1.05, 0.2],
      [2.15, -0.55, -0.2],
      [0.45, -1.75, 0.35],
    ],
    cardRotations: [
      [0.05, 0.25, -0.08],
      [-0.08, -0.3, 0.08],
      [0.1, 0.05, 0],
      [-0.06, -0.24, 0.08],
      [0.08, 0.28, -0.06],
      [-0.05, -0.12, 0.04],
    ],
    barHeights: [0.2, 0.2, 0.2, 0.2, 0.2],
  },
  {
    id: "pipeline",
    selector: "#model",
    label: "Единый production pipeline",
    caption: "Один центр ответственности и последовательные этапы",
    modules: ["Стратегия", "Контент", "Монтаж", "Публикации", "Реклама", "Аналитика"],
    corePosition: [0, -1.45, -0.4],
    coreScale: 0.58,
    cardPositions: [
      [-2.55, 0.4, 0],
      [-1.55, 0.4, 0],
      [-0.55, 0.4, 0],
      [0.55, 0.4, 0],
      [1.55, 0.4, 0],
      [2.55, 0.4, 0],
    ],
    cardRotations: flatRotations,
    barHeights: [0.2, 0.2, 0.2, 0.2, 0.2],
  },
  {
    id: "finance",
    selector: ".finance-section",
    label: "Финансовый контур",
    caption: "Данные в 3D поддерживают, но не заменяют точные расчеты",
    modules: ["Выручка", "Расходы", "Прибыль", "Инвестор", "Компания"],
    corePosition: [0, 1.7, -0.8],
    coreScale: 0.42,
    cardPositions: [
      [-2.5, -1.75, -1],
      [-1.5, -1.75, -1],
      [-0.5, -1.75, -1],
      [0.5, -1.75, -1],
      [1.5, -1.75, -1],
      [2.5, -1.75, -1],
    ],
    cardRotations: flatRotations,
    barHeights: [3.2, 2.2, 1.65, 0.82, 1.12],
  },
  {
    id: "automation",
    selector: ".roadmap-section",
    label: "IT & AI ecosystem",
    caption: "Media Production становится цифровой системой бизнеса",
    modules: ["Сайт", "CRM", "Telegram-бот", "AI-ассистент", "Аналитика", "Автоматизация"],
    corePosition: [-1.7, 0.8, 0],
    coreScale: 0.72,
    cardPositions: [
      [-0.1, 1.75, -0.1],
      [1.8, 1.2, 0.15],
      [2.35, -0.45, -0.1],
      [0.75, -1.65, 0.2],
      [-1.1, -1.45, -0.2],
      [-2.45, -0.5, 0.1],
    ],
    cardRotations: [
      [0, 0.16, 0],
      [0, -0.18, 0.05],
      [0.08, -0.2, 0],
      [-0.05, 0.1, -0.06],
      [0, 0.18, 0.05],
      [0, -0.1, -0.05],
    ],
    barHeights: [0.2, 0.2, 0.2, 0.2, 0.2],
  },
] as const;
