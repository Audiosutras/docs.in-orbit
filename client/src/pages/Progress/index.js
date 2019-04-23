import React from 'react';
import { Row, Col } from 'antd';
import Header from '../../component/Header';
import ProgressDisplay from '../../component/ProgressDisplay';

const ProgressPage = () => {
  return (
    <>
      <Header /> 
      <ProgressDisplay />
    </>
  );
};

export default ProgressPage;