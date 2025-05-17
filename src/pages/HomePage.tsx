import React from 'react';
import TestList from '../components/TestList/TestList';

const HomePage: React.FC = () => {
  return (
    <div className="page">
      <h1>Доступные тесты</h1>
      <TestList />
    </div>
  );
};

export default HomePage;