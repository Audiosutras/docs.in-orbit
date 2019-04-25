import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../../component/Header';
import InstallGuide from '../../component/InstallGuide';
import ProgressDisplay from '../../component/ProgressDisplay';
import Highlighter from '../../component/Highlighter';
import Table from '../../component/Table';
import { NavbarContainer } from './Styled';

const ProgressPage = () => {
  const [viewing, setViewing] = useState('');

  const handleClick = choice => (viewing !== choice) ? setViewing(choice) : setViewing('');
  return (
    <>
      <Header />
      <Row>
        <Col span={2}>
          <NavbarContainer viewing={viewing}>
            
          </NavbarContainer>
        </Col>
        <Col span={21}>
          <InstallGuide />
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
          <div style={{marginTop: '32px'}}>
            <Table />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProgressPage;