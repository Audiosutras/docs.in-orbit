import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Div, StyledH3, InstallDiv, Link, Paragraph } from './Styled';

const Header = () => {
  return (
    <>
      <Div logo>
        <Row>
          <Col span={2}>
            <StyledH3>in-orbit</StyledH3>
          </Col>
          <Col span={22}>
            <Row>
              <Col span={20}></Col>
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
    </>
  );
};

export default Header;