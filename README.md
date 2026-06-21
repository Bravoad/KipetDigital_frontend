# KipetDigital Frontend

Frontend для Django/DRF-бэкенда KipetDigital. Проект сделан как MVP клиентского сайта digital-агентства: услуги, проекты, технологии, новости, вакансии, контакты и заявки.

## 💡 Поддержать проект

Если KipetDigital помог вашему бизнесу или проекту — поддержите его развитие:

💰 DonationAlerts: https://www.donationalerts.com/r/bravoad

📞 Перевод на номер: +7 (981) 435-59-46

## Стек

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Zod
- Vitest + React Testing Library

## Запуск

```bash
cp .env.example .env
npm install
npm run dev
```

По умолчанию API ожидается по адресу:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## Сборка

```bash
npm run build
npm run preview
```

## Тесты

```bash
npm test
```

## API endpoints

Все пути вынесены в:

```text
src/shared/api/endpoints.ts
```

Текущие предполагаемые DRF endpoints:

```text
GET  /services/
GET  /services/:idOrSlug/
GET  /projects/
GET  /projects/:idOrSlug/
GET  /technologies/
GET  /technologies/:idOrSlug/
GET  /news/
GET  /news/:idOrSlug/
GET  /vacancies/
GET  /vacancies/:idOrSlug/
POST /orders/
POST /contact-form/
```

Если в Django `urls.py` отличаются, достаточно поправить `endpoints.ts`.

## Docker

```bash
docker build -t kipetdigital-frontend .
docker run --rm -p 3000:80 kipetdigital-frontend
```

## Интеграция с Django

Для локальной разработки включите CORS на backend, например через `django-cors-headers`, и разрешите адрес фронтенда:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

