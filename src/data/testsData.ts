import { Test } from '../types/testTypes';

export const tests: Test[] = [
  {
    id: 1,
    title: "Основы JavaScript",
    description: "Тест на базовые знания JavaScript",
    questions: [
      {
        id: 1,
        text: "Как объявить переменную в JS?",
        options: ["var", "let", "const", "все варианты верны"],
        correctAnswer: 3
      },
      {
        id: 2,
        text: "Что возвращает `typeof null`?",
        options: ["null", "object", "undefined", "string"],
        correctAnswer: 1
      }
    ]
  }
];