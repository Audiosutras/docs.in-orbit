import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../../component/Header';
import ProgressDisplay from '../../component/ProgressDisplay';
import Highlighter from '../../component/Highlighter';
import Table from '../../component/Table';

const ProgressPage = () => {
  const [viewing, setViewing] = useState('');

  const handleClick = choice => (viewing !== choice) ? setViewing(choice) : setViewing('');
  console.log(viewing);
  return (
    <>
      <Header />
      <ProgressDisplay 
        handleClick={handleClick}
      />
      <div>
        <Row>
          <Col span={24}>
           <Highlighter viewing={viewing} />
          </Col>
        </Row>
      </div>
      <div>
        <div>
         <h1>API</h1>
        </div>
        <div>
          <h2>ProgressIterator</h2>
          <Table />
        </div>
        <div>
          <h2>Revolve</h2>
          <Table table="revolve" />
        </div>
      </div>
    </>
  );
};

export default ProgressPage;