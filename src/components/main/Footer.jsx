import styled from 'styled-components';

const Footer = () => {
  return <Wrapper as="footer">By veru</Wrapper>;
};

const Wrapper = styled.div`
  align-self: end;
  background-color: var(--color-1);
  color: var(--color-5);
  justify-content: center;
  display: grid;
`;

export default Footer;
