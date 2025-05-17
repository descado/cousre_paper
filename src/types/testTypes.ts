export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Индекс правильного ответа
}

export interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}