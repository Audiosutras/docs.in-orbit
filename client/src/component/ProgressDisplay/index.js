import React from 'react';
import { ProgressIterator, Basic, Hazard, Revolve } from 'in-orbit';
import { Row, Col } from 'antd';
import { ItemContainer, Button } from './Styled';

const ProgressDisplay = () => {
  return (
    <Row>
      <Col span={9}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator>
            {({ percent }) => <Button><Revolve percent={percent} genesis flash /> </Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator>
            {({ percent }) => <Button><Revolve percent={percent} color="#1ee01a" sync /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator>
            {({ percent }) => <Button><Hazard percent={percent} /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator>
            {({ percent }) => <Button><Basic percent={percent} color="magenta" /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default ProgressDisplay;