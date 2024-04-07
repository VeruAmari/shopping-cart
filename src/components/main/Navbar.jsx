import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { NavElement, ExNavElement } from '../sub/Containers';
import Logo from '../sub/Logo';
import cart from './cart.svg';

const Navbar = ({ cartProducts }) => {
  let amountOfProducts = 0;
  if (cartProducts) {
    for (let product in cartProducts) {
      amountOfProducts += cartProducts[product];
    }
  }

  return (
    <Wrapper as="nav">
      <NavElement to="/">
        <Logo />
      </NavElement>
      <ExNavElement to="shopping/shop">To Shop</ExNavElement>

      <NavElement to="shopping/checkout">
        <CartWrapper>
          Cart
          <StyledCart />
          {cartProducts && <AmountCircle> {amountOfProducts} </AmountCircle>}
        </CartWrapper>
      </NavElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  align-self: start;
  grid-template-columns: auto auto auto;
  display: grid;
  justify-content: space-around;
  background-color: var(--color-3);
`;

const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  position: relative;
`;
const AmountCircle = styled.div`
  position: absolute;
  top: -30%;
  right: -30%;
  background-color: var(--color-2);
  color: var(--color-5);
  display: grid;
  justify-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  text-align: center;
  align-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 99%;
`;

const StyledCart = styled.div`
  background-image: url(${cart});
  width: 20px;
  height: 20px;
`;

Navbar.propTypes = {
  cartProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Navbar;
