import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavElement } from '../sub/Containers';
import Logo from './Logo';
import cart from './cart.svg';

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <Link to="/">
        <NavElement>
          <Logo />
        </NavElement>
      </Link>
      <InnerWrapper>
        <Link to="shop">
          <NavElement>Shop</NavElement>
        </Link>
        <Link to="checkout">
          <NavElement>
            <StyledCart />
          </NavElement>
        </Link>
      </InnerWrapper>
    </Wrapper>
  );
};

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const Wrapper = styled.div`
  align-self: start;
  grid-template-columns: auto auto;
  display: grid;
  justify-content: space-between;
  background-color: var(--color-2);
`;

const Cart = () => <img src={cart} alt="" />;

const StyledCart = styled(Cart)`
  color: white;
  max-width: 50px;
  max-height: 50px;
`;

export default Navbar;
