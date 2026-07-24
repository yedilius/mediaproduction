# Media Production

Премиальная инвестиционная платформа Media Production, адаптированная из существующего портфолио с сохранением реальных кейсов, изображений и видео.

## Стек

- Next.js App Router
- React + TypeScript
- CSS design tokens and responsive layout
- Motion
- Three.js — lightweight interactive hero scene with WebGL fallback
- Recharts
- React Hook Form + Zod
- Vitest
- Lucide Icons

## Локальная разработка

```bash
npm ci
npm run dev
```

Приложение откроется на `http://localhost:3000`.

## Проверка качества

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Все четыре проверки обязательны перед push в `main`.

## Маршруты

- `/` — публичная инвестиционная платформа и портфолио.
- `/investor-room` — безопасная mock-основа будущей private data room.

## Данные

Контент и значения находятся в `src/config`. Финансовые расчёты реализованы в `src/lib/finance.ts`, тесты — в `src/lib/finance.test.ts`.

Реальные материалы портфолио находятся в `public/assets`. Не удаляйте и не переименовывайте их без проверки всех ссылок.

## Investor Room

Текущая версия не содержит frontend-пароля и не публикует конфиденциальные документы. Для production-доступа необходимо отдельно подключить server-side authentication, разграничение ролей, защищённое хранилище и audit log.
