import React from 'react';
import { ProgressIterator, Basic, Hazard, Revolve } from 'in-orbit';
import { Row, Col } from 'antd';
import { ItemContainer, Button } from './Styled';

const colors = [
  {
    genesis: '#FF00FF',
    revolve: '#0061ff',
    hazard: '#f6ff00',
    basic: '#eaeae5'
  },
  {
    genesis: '#5bd8ff',
    revolve: '#ff5bad',
    hazard: '#dd0f0f',
    basic: '#5bff73'
  },
  {
    genesis: '#89b7b1',
    revolve: '#a0393c',
    hazard: '#1987e5',
    basic: '#1af87d'
  },
  {
    genesis: '#0cfb48',
    revolve: '#61edc7',
    hazard: '#5acaa0',
    basic: '#fff'
  }
];

const ProgressDisplay = ({ handleClick }) => {
  return (
    <Row>
      <Col span={9}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator paginateArr={colors}>
            {({ percent, currentIndex }) => <Button onClick={() => handleClick('genesis')}><Revolve percent={percent} genesis flash color={colors[currentIndex].genesis} /> </Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator paginateArr={colors}>
            {({ percent, currentIndex }) => <Button onClick={() => handleClick('revolve')}><Revolve percent={percent} sync color={colors[currentIndex].revolve} /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator paginateArr={colors}>
            {({ percent, currentIndex }) => <Button onClick={() => handleClick('hazard')}><Hazard percent={percent} color={colors[currentIndex].hazard} /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={1}></Col>
      <Col span={1}>
        <ItemContainer>
          <ProgressIterator paginateArr={colors} seconds={4}>
            {({ percent, currentIndex }) => <Button onClick={() => handleClick('basic')}><Basic percent={percent} color={colors[currentIndex].hazard} /></Button>}
          </ProgressIterator>
        </ItemContainer>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default ProgressDisplay;