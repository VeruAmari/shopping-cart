import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <Logo />
      shop
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.div`
  display: grid;
  padding: 0.5rem;
  grid-template-columns: auto auto;
  color: var(--color-5);
  justify-content: center;
  align-self: start;
  align-items: center;
  background-color: var(--color-1);
`;

export default Header;