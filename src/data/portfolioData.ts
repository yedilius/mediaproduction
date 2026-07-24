import { imagePath, videoPath } from "../utils/assetHelpers";

export const profile = {
  name: "Айым",
  role: "SMM-специалист",
  instagram: "@laiymm",
  phone: "+7 702 315 4140",
  hero: {
    title: "SMM-специалист",
    subtitle:
      "Продумываю визуал, снимаю Reels, оформляю сторис и собираю контент в систему, которая помогает бренду выглядеть уверенно и привлекать клиентов.",
    image: imagePath("aiym-portrait.jpeg")
  },
  about:
    "Меня зовут Айым. Я работаю с брендами, экспертами и локальным бизнесом: помогаю выстроить визуальный стиль, контент-план, сторис, Reels и понятную коммуникацию в Instagram.",
  aboutExtra:
    "Мой подход — не просто красиво оформить страницу, а сделать её рабочим инструментом: чтобы профиль быстро объяснял ценность, вызывал доверие и вёл аудиторию к заявке, покупке или знакомству с брендом.",
  aboutImage: imagePath("aiym-about-191254.jpeg")
};

export const stats = [
  { value: "2022", label: "старт в SMM" },
  { value: "12+", label: "ниш в портфолио" },
  { value: "Reels", label: "съёмка и монтаж" }
];

export const expertise = [
  "контент-стратегия",
  "съёмка Reels",
  "визуал Instagram",
  "сторис-дизайн",
  "тексты и сценарии",
  "оформление профиля",
  "анализ контента",
  "рекламные креативы"
];

export const experience = [
  {
    year: "2022",
    title: "Первые проекты и база SMM",
    text: "Начала с текстов, сценариев и сторис. Изучала контент-маркетинг, упаковку профиля и принципы продвижения в Instagram."
  },
  {
    year: "2023",
    title: "Блогеры и визуальная подача",
    text: "Работала с идеями для публикаций, оформлением сторис, Reels-обложками и созданием узнаваемой визуальной системы."
  },
  {
    year: "2024",
    title: "Коммерческие аккаунты",
    text: "Вела проекты для бизнеса: контент-планы, съёмки, тексты, визуал, публикации и рекламные материалы под конкретные цели."
  },
  {
    year: "2025",
    title: "Проектный и командный опыт",
    text: "Развивала собственные SMM-проекты и процессы. Этот опыт помог получить навыки управления проектами, клиентами и командными процессами."
  }
];

export const portraits = [
  imagePath("IMG_4875.PNG"),
  imagePath("IMG_4876.PNG"),
  imagePath("IMG_4877.PNG"),
  imagePath("IMG_4878.PNG")
];

export const equipment = [
  {
    title: "Sony ZV-E10 II",
    description: "Основная камера для портретов, Reels и предметных кадров.",
    image: imagePath("sony-zv-e10-ii-exibart-street-photography-00-1038x705.jpg")
  },
  {
    title: "Sigma 18-50mm",
    description: "Универсальный объектив для съёмок в интерьере, городе и студии.",
    image: imagePath("maxresdefault.jpg")
  },
  {
    title: "Amaran 150c",
    description: "Постоянный свет для чистой картинки и контролируемой атмосферы.",
    image: imagePath("DSCF0056-scaled.jpg")
  },
  {
    title: "Компактная камера-дрон",
    description: "Дополнительные динамичные кадры и необычные ракурсы.",
    image: imagePath("8fJX67EMsPap3j8CUVbb3Y.jpg")
  }
];

export const equipmentText = [
  "Камера Sony",
  "объектив Sigma 18-50mm",
  "смартфон",
  "штатив",
  "стабилизатор",
  "петличные микрофоны",
  "кольцевая лампа",
  "студийный свет"
];

export const tools = [
  "CapCut",
  "Canva",
  "Figma",
  "Notion",
  "Google Drive",
  "Meta Ads",
  "Adobe Illustrator"
];

export const storyExamples = [
  {
    title: "Медицинская визуальная сетка",
    image: imagePath("astana-vision-grid-full.jpeg"),
    type: "Instagram grid"
  },
  {
    title: "Beauty и цветочный контент",
    image: imagePath("IMG_4892.PNG"),
    type: "Stories & posts"
  },
  {
    title: "Экспертный контент",
    image: imagePath("IMG_4901.PNG"),
    type: "Post design"
  },
  {
    title: "Образовательный контент",
    image: imagePath("IMG_4903.PNG"),
    type: "Reels covers"
  }
];

export const visualBoards = [
  imagePath("astana-vision-grid-full.jpeg"),
  imagePath("IMG_4892.PNG"),
  imagePath("IMG_4887.PNG")
];

export const shootVideos = [
  {
    title: "Sky Beach",
    description: "Обзор локации с атмосферой, деталями пространства и динамикой для Reels.",
    video: videoPath("IMG_4885.MP4"),
    poster: imagePath("cover-aiym.jpeg")
  },
  {
    title: "Astana Vision",
    description: "Контент для медицинского проекта: экспертность, доверие и чистая визуальная подача.",
    video: videoPath("IMG_4886.MP4"),
    poster: imagePath("cover-astana-vision.jpeg")
  },
  {
    title: "Graduation",
    description: "Эмоциональный ролик для выпускного события: люди, детали и настроение дня.",
    video: videoPath("IMG_4896.MP4"),
    poster: imagePath("cover-03.jpeg")
  },
  {
    title: "Love story",
    description: "Мягкий lifestyle-формат с фокусом на историю, движение и живые кадры.",
    video: videoPath("IMG_4897.MP4"),
    poster: imagePath("cover-04.jpeg")
  }
];
