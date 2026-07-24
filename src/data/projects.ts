import { imagePath, videoPath } from "../utils/assetHelpers";

export type Project = {
  id: number;
  type: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    type: "Обзор локации",
    title: "Sky Beach",
    description: "Видеообзор пространства: атмосфера, детали сервиса и ощущение места через динамичный монтаж.",
    video: videoPath("IMG_4885.MP4"),
    image: imagePath("cover-aiym.jpeg")
  },
  {
    id: 2,
    type: "Медицинский контент",
    title: "Astana Vision",
    description: "Контент для клиники: понятные визуальные акценты, доверие к экспертам и аккуратная подача.",
    video: videoPath("IMG_4886.MP4"),
    image: imagePath("cover-astana-vision.jpeg")
  },
  {
    id: 3,
    type: "Сотрудничество",
    title: "Romeo",
    description: "Эстетичный цветочный контент для ленты, сторис и Reels с мягкой визуальной подачей.",
    video: videoPath("IMG_4891.MP4"),
    image: imagePath("cover-02.jpeg")
  },
  {
    id: 4,
    type: "Событие",
    title: "Graduation",
    description: "Ролик для выпускного формата: эмоции, портреты, детали и праздничная динамика.",
    video: videoPath("IMG_4896.MP4"),
    image: imagePath("cover-03.jpeg")
  },
  {
    id: 5,
    type: "Традиционное событие",
    title: "Kyz Uzaty",
    description: "Атмосферная съёмка события с акцентом на детали, людей и эмоциональные моменты.",
    video: videoPath("IMG_4898.MP4"),
    image: imagePath("cover-01.jpeg")
  },
  {
    id: 6,
    type: "Lifestyle",
    title: "Love story",
    description: "Нежный видеоформат про пару: прогулка, настроение, движение и естественная история.",
    video: videoPath("IMG_4897.MP4"),
    image: imagePath("cover-04.jpeg")
  },
  {
    id: 7,
    type: "Fashion",
    title: "Магазин одежды",
    description: "Видео для магазина одежды: образ, посадка, настроение и короткая продающая структура.",
    video: videoPath("IMG_4890.MP4"),
    image: imagePath("cover-05.jpeg")
  },
  {
    id: 8,
    type: "Процесс",
    title: "Vic Trade",
    description: "Сотрудничество с Vic Trade: процесс, команда, объект и ощущение реальной работы проекта.",
    video: videoPath("IMG_4889.MP4"),
    image: imagePath("cover-astana-vision.jpeg")
  }
];
