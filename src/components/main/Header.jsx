import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <Logo /> shop
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  color: var(--color-5);
  justify-content: center;
  align-self: start;
  background-color: var(--color-1);
`;

export default Header;
