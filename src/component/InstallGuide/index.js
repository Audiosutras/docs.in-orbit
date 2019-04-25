import React from 'react';
import { Row, Col } from 'antd';
import { InstallDiv, Paragraph } from './Styled';

const InstallGuide = () => {
  return (
    <div>
      <Row>
        <Col span={21}></Col>
        <Col span={3}>
          <InstallDiv>
            <Paragraph>
              > yarn add in-orbit
            </Paragraph>
          </InstallDiv>
        </Col>
      </Row>
  </div>
  );
};

export default InstallGuide;