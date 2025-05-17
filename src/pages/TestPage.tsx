import React from 'react';
import { useParams } from 'react-router-dom';
import TestPassing from '../components/TestPassing/TestPassing';

const TestPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();

  return (
    <div className="page">
      <TestPassing testId={Number(testId)} />
    </div>
  );
};

export default TestPage;