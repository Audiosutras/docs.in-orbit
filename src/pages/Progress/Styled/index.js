import styled from 'styled-components';

const InstallContainer = styled.div`
  background-color: black;
  color: #00F880;
  border: 2px black;
`;

const Span = styled.span`
  color: red;
`;

const NavbarContainer = styled.div`
  height: ${({ viewing }) => (viewing) ? '265vh' : '200vh'};
  width: 7vw;
  border-right-style: solid;
  border-right-width: 1px;
  background-image: linear-gradient(to bottom, black, white);
`;

export { InstallContainer, Span, NavbarContainer };