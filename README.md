# React Redux Homework

## Опис проєкту

Навчальний React-проєкт для практики роботи з Redux Toolkit.

Проєкт був рефакторений з використання React Context на Redux для керування глобальним станом.

У застосунку реалізовано:

- отримання списку користувачів з API;
- збереження користувачів у Redux Store;
- створення Redux Slice за допомогою `createSlice`;
- використання `useSelector` для отримання даних зі Store;
- використання `useDispatch` для відправлення Redux actions;
- відображення отриманих користувачів на сторінці;
- підключення Redux Store до React через `Provider`;
- перевірка стану та actions за допомогою Redux DevTools.

## Використані технології

- React
- Vite
- Redux Toolkit
- React Redux
- JavaScript
- CSS
- JSONPlaceholder API

## Структура Redux

Redux-файли розташовані в директорії:

```text
src/
├── redux/
│   ├── store.js
│   └── slices/
│       └── usersSlice.js
├── components/
│   └── Profile.jsx
├── App.jsx
└── main.jsx
```

## Встановлення та запуск

1. Клонувати репозиторій:

```bash
git clone (https://github.com/llens202/home-work-45-redux)
```

2. Перейти в папку проєкту:

```bash
cd my-redux-app
```

3. Встановити залежності:

```bash
npm install
```

4. Запустити проєкт:

```bash
npm run dev
```

5. Відкрити адресу, яку покаже Vite у терміналі.

## Демо-версія

[Переглянути демо](https://home-work-45-redux-nine.vercel.app/)
