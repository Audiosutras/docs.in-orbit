import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../../component/Header';
import ProgressDisplay from '../../component/ProgressDisplay';
import Highlighter from '../../component/Highlighter';

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
      {(viewing) && (<div>
        <Row>
          <Col span={24}>
           <Highlighter viewing={viewing} />
          </Col>
        </Row>
      </div>)}
    </>
  );
};

export default ProgressPage;