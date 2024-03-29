import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavElement } from '../sub/Containers';
import Logo from './Logo';
import { NavElement } from '../sub/Containers';

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <Link to="/">
        <NavElement>
          <Logo />
        </NavElement>
      </Link>
      <Link to="shop">
        <NavElement>Shop</NavElement>
      </Link>
      <Link to="checkout">
        <NavElement>Checkout</NavElement>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: start;
  grid-template-columns: auto auto auto;
  display: grid;
  justify-content: space-between;
  background-color: var(--color-2);
`;

export default Navbar;
