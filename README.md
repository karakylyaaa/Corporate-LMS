# Corporate LMS

Корпоративная образовательная платформа для обучения банковского персонала.

Стек: React (Vite), Node.js + Express, PostgreSQL.  
Архитектура: многоуровневая (Presentation / Business Logic / Data Access).

## Структура проекта

```
client/
  src/
    api/
    components/
    pages/
server/
  src/
    app.js
    index.js
    routes/
    controllers/
    services/
    db/
      repositories/
  .env.example
```

## Запуск

1. **Сервер**

   ```bash
   cd server
   cp .env.example .env
   npm install
   npm run dev
   ```

   По умолчанию: http://localhost:3000

2. **Клиент**

   ```bash
   cd client
   npm install
   npm run dev
   ```

   По умолчанию: http://localhost:5173 (прокси `/api` → сервер).

## API

- `GET /api/health` — проверка работы сервера. Ответ: `{ "data": { "status": "ok" } }`.