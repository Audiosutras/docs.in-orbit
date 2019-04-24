import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: ${({ logo }) => logo ? '10%' : '5%'};
  border-width: 1px;
  padding: 10px;
  background-color: ${({ logo }) => logo ? 'black' : '#1a1a1a'};
`;

const StyledH3 = styled.h3`
  background-image: linear-gradient(to right, black, white);
  border: none;
  border-radius: 50px;
  padding: 1px 0px 1px 5px;
`;

const InstallDiv = styled.div`
  background-image: linear-gradient(to left, black, white);
  text-align: left;
  margin-right: 20px;
  margin-top: 20px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Paragraph = styled.p`
  padding: 3px 0px;
`;

export { Div, StyledH3, InstallDiv, Link, Paragraph };