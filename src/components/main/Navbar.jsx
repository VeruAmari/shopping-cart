import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { NavElement, ExNavElement } from '../sub/Containers';
import Logo, { OuterLogoWrapper } from '../sub/Logo';
import cart from './cart.svg';
import { matchRoutes, useLocation } from 'react-router-dom';

const routes = [
  { path: '/' },
  { path: '/home' },
  { path: '/shopping/shop' },
  { path: '/shopping/checkout' },
];
const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

const Navbar = ({ cartProducts }) => {
  let amountOfProducts = 0;
  if (cartProducts) {
    for (let product in cartProducts) {
      amountOfProducts += cartProducts[product];
    }
  }
  const path = useCurrentPath();

  return (
    <Wrapper as="nav">
      <ExNavElement to="/home">
        {(path === '/home' && (
          <OuterLogoWrapper>
            <Logo />
          </OuterLogoWrapper>
        )) || <Logo />}
      </ExNavElement>

      <ExNavElement to="shopping/shop">
        {(path === '/shopping/shop' && (
          <OuterLogoWrapper>To Shop</OuterLogoWrapper>
        )) ||
          'To Shop'}
      </ExNavElement>

      <ExNavElement to="shopping/checkout">
        {(path === '/shopping/checkout' && (
          <OuterLogoWrapper>
            <CartWrapper>
              Cart
              <StyledCart src={cart} />
              {cartProducts && (
                <AmountCircle> {amountOfProducts} </AmountCircle>
              )}
            </CartWrapper>
          </OuterLogoWrapper>
        )) || (
          <CartWrapper>
            Cart
            <StyledCart src={cart} />
            {cartProducts && <AmountCircle> {amountOfProducts} </AmountCircle>}
          </CartWrapper>
        )}
      </ExNavElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  align-self: start;
  grid-template-columns: auto auto auto;
  display: grid;
  border-top: 3px solid var(--color-5);
  border-bottom: 3px solid var(--color-5);
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

const StyledCart = styled.img`
  width: 20px;
  height: 20px;

  /* Set color to #EEF5DB according to script output from https://codepen.io/sosuke/pen/Pjoqqp */
  filter: invert(93%) sepia(38%) saturate(5337%) hue-rotate(294deg)
    brightness(140%) contrast(89%);

  ${NavElement}:hover > ${CartWrapper} > & {
    /* Set color to #333745 according to script output from https://codepen.io/sosuke/pen/Pjoqqp */
    filter: invert(20%) sepia(20%) saturate(499%) hue-rotate(189deg)
      brightness(97%) contrast(93%);
  }
`;

Navbar.propTypes = {
  cartProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Navbar;
