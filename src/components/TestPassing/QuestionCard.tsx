import React from 'react';
import { Question } from '../../types/testTypes';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <div className="question-card">
      <h3>Вопрос {currentQuestionIndex + 1}/{totalQuestions}</h3>
      <p>{question.text}</p>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(index)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;