import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tests } from '../../data/testsData';
import './TestResult.css';

const TestResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const score = Number(params.get('score'));
  const isTimeout = params.get('timeout') === 'true';
  const testId = location.pathname.split('/')[2];

  const test = tests.find(t => t.id === Number(testId));
  const totalQuestions = test?.questions.length || 0;

  return (
    <div className="result-page">
  <h1 className={isTimeout ? "timeout-message" : ""}>
    {isTimeout ? 'Время вышло!' : 'Тест завершён!'}
  </h1>
  <p>Ваш результат: {score} из {totalQuestions}</p>
  <div className="progress-bar">
    <div 
      className="progress" 
      style={{ width: `${(score / totalQuestions) * 100}%` }}
    ></div>
  </div>
  <button onClick={() => navigate('/')}>На главную</button>
</div>
  );
};

export default TestResult;