import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import TestResult from './components/TestResult/TestResult';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test/:testId" element={<TestPage />} />
            <Route path="/result/:testId" element={<TestResult />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;