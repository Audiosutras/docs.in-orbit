import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Div, StyledH3, Link } from './Styled';

const Header = () => {
  return (
    <Div logo>
      <Row>
        <Col span={2}>
          <StyledH3>in-orbit</StyledH3>
        </Col>
        <Col span={22}>
          <Row>
            <Col span={20}>
              <p style={{ color: '#fff', fontWeight: 'bold', marginTop: '10px', marginLeft: '10px'}}>
                A react component library for rendering beautiful progress circle animations.
              </p>
            </Col>
            <Col span={2}>
            <Link 
              href="https://www.npmjs.com/package/in-orbit" 
              rel="external"
              target="_blank"
              >
                <Icon type="project" height="5px" width="5px" />
              </Link>
            </Col>
            <Col span={2}>
              <Link 
              href="https://github.com/Audiosutras" 
              rel="external"
              target="_blank"
              >
                <Icon type="github" height="5px" width="5px" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
};

export default Header;