import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Test } from '../../types/testTypes';
import { tests } from '../../data/testsData';
import Timer from './Timer';
import QuestionCard from './QuestionCard';

interface TestPassingProps {
  testId: number;
}

const TestPassing: React.FC<TestPassingProps> = ({ testId }) => {
  const [currentTest, setCurrentTest] = useState<Test | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 минут в секундах
  const navigate = useNavigate();

  useEffect(() => {
    const test = tests.find(t => t.id === testId);
    if (!test) navigate('/');
    setCurrentTest(test || null);
  }, [testId]);

  const handleAnswer = (selectedOption: number) => {
    if (!currentTest) return;

    const isCorrect = selectedOption === currentTest.questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex < currentTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate(`/result/${testId}?score=${score + (isCorrect ? 1 : 0)}`);
    }
  };

  const handleTimeEnd = () => {
    navigate(`/result/${testId}?score=${score}&timeout=true`);
  };

  if (!currentTest) return <div>Загрузка...</div>;

  return (
    <div className="test-passing">
      <Timer initialTime={timeLeft} onTimeEnd={handleTimeEnd} />
      <QuestionCard
        question={currentTest.questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={currentTest.questions.length}
      />
    </div>
  );
};

export default TestPassing;