# REGFILE Project

Полный проект сайта для regfile.ru — ликвидация и регистрация ООО/ИП.

## Структура проекта

```
regfile-project/
├── landing/          # Лид-магнит (лендинг с email-формой)
│   └── index.html    # Главная страница лид-магнита
├── website/          # Основной сайт (React + Vite)
│   ├── src/          # Исходники React-приложения
│   ├── dist/         # Сборка для деплоя
│   ├── index.html
│   ├── package.json
│   └── ...
├── docs/             # Документация проекта
│   └── PROJECT_PLAN.md
└── archive/          # Архивы версий
    ├── regfile-dist.zip
    └── regfile-project.zip
```

## Лид-магнит

**URL:** https://kokobongafreakr222.github.io/regfile-project/landing/

- HTML, CSS, JavaScript
- Mobile-first дизайн
- Email-форма → показ чек-листа
- Интерактивные чекбоксы

## Основной сайт

- React 19 + Vite
- Tailwind CSS
- 9 страниц
- Тёмная тема с зелёным акцентом

## Запуск локально

```bash
# Лид-магнит (статика)
cd landing
# Открыть index.html в браузе

# Основной сайт
cd website
npm install
npm run dev
```

## Деплой

Лид-магнит развёрнут через GitHub Pages.
