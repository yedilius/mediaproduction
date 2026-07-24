# Портфолио Айым

Современный frontend-проект для SMM-портфолио: React, Vite, TypeScript, CSS Modules, адаптивная верстка, ленивые изображения, видео-карточки и Docker.

## Локальный запуск без Docker

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:5173`.

## Запуск через Docker

```bash
docker compose up --build
```

Docker поднимет production-сборку на `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

Preview по умолчанию доступен на `http://localhost:4173`.

## Deploy

Рекомендуемый бесплатный деплой: Vercel.

Настройки проекта:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Также добавлены `vercel.json` и `netlify.toml`, поэтому проект готов и для Vercel, и для Netlify.

## Где менять данные

Основной контент вынесен в `src/data`:

- `portfolioData.ts` — профиль, hero, about, опыт, оборудование, примеры постов и видео.
- `projects.ts` — кейсы.
- `niches.ts` — ниши.
- `services.ts` — форматы разовых съемок.

Медиа лежат в `public/assets/images` и `public/assets/videos`. Для новых файлов добавляйте путь через helpers из `src/utils/assetHelpers.ts`.
