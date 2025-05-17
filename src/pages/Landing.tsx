import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Landing.module.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Добро пожаловать в TestMaster</h1>
        <p>Платформа для проверки знаний и навыков</p>
        <Link to="/tests" className="cta-button">
          Начать тестирование
        </Link>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>Разнообразные тесты</h3>
          <p>Более 50 тестов по различным темам</p>
        </div>
        <div className="feature-card">
          <h3>Мгновенные результаты</h3>
          <p>Получайте оценку сразу после завершения</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;