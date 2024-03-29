import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavElement } from '../sub/Containers';
import Logo from './Logo';
import cart from './cart.svg';

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <NavElement to="/">
        <Logo />
      </NavElement>
      <NavElement to="shop">Go Shopping</NavElement>

      <NavElement to="checkout">
        <StyledCart />
      </NavElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: start;
  grid-template-columns: auto auto auto;
  display: grid;
  justify-content: space-around;
  background-color: var(--color-2);
`;

const StyledCart = styled.div`
  background-image: url(${cart});
  width: 25px;
  height: 25px;
`;

export default Navbar;
