import React from 'react';
import { tests } from '../../data/testsData';
import { Link } from 'react-router-dom';
import './TestList.css';

const TestList: React.FC = () => {
  return (
    <div className="test-list">
      {tests.map(test => (
        <div key={test.id} className="test-card">
          <h3>{test.title}</h3>
          <p>{test.description}</p>
          <Link to={`/test/${test.id}`} className="start-button">
            Начать тест
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TestList;