import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../sub/Headers';
import { useOutletContext } from 'react-router-dom';
import Card, { CardsContainer } from '../sub/Card';
import { roundToTwo } from '../../helperFunctions';
import { DarkButton, LightColorfulButton } from '../sub/Buttons';

const Checkout = ({ children }) => {
  const [data, cartProducts, setCartProducts] = useOutletContext();

  const cards = [];
  const purchases = [];
  let total = 0;
  for (let product of data) {
    if (cartProducts[product.id]) {
      total = roundToTwo(total + product.price * cartProducts[product.id]);
      purchases.push(
        <Product
          id={product.id}
          title={product.title}
          price={product.price}
          cartProducts={cartProducts}
          key={'product' + product.id}
        ></Product>,
      );
      cards.push(
        <Card
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
          key={'card' + product.id}
          cartProducts={cartProducts}
          cb={setCartProducts}
        ></Card>,
      );
    }
  }

  return (
    <Wrapper>
      <Heading margin="2" level="2">
        Checkout Page
      </Heading>
      {children}
      {(!cards[0] && (
        <Heading level="2">There are no products in your cart!</Heading>
      )) || (
        <ContentDivider>
          <CardsContainerEx>{cards}</CardsContainerEx>
          <PurchaseSummary>
            <h2>Your cart</h2>
            {purchases}
            <TotalContainer>
              <span>Total:</span>
              <PriceContainer>${total}</PriceContainer>
            </TotalContainer>
            <ExDarkButton
              onClick={() => {
                alert('Thank you for your purchase!');
              }}
            >
              Confirm Purchase
            </ExDarkButton>
            <ExLightColorfulButton
              onClick={() => {
                setCartProducts('');
              }}
            >
              Clear Cart
            </ExLightColorfulButton>
          </PurchaseSummary>
        </ContentDivider>
      )}
    </Wrapper>
  );
};

const ExLightColorfulButton = styled(LightColorfulButton)`
  justify-self: center;
  margin: 1rem;
`;
const ExDarkButton = styled(DarkButton)`
  margin: 1rem;
  justify-self: center;
`;
const Wrapper = styled.div`
  display: grid;
`;

const ContentDivider = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: grid;
  width: 100vw;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;
const CardsContainerEx = styled(CardsContainer)`
  @media (max-width: 600px) {
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const PurchaseSummary = styled.div`
  padding: 1rem;
  display: grid;
  align-items: start;
  align-content: start;
  @media (max-width: 600px) {
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const ProductBase = ({ id, title, price, cartProducts }) => {
  return (
    <>
      <span>
        {title} ${price}
        {` x${cartProducts[id]}`}
      </span>
      <PriceContainer>${roundToTwo(price * cartProducts[id])}</PriceContainer>
      <hr />
    </>
  );
};

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Product = styled(ProductBase)`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
`;
const PriceContainer = styled.span`
  display: grid;
  justify-content: end;
`;

Checkout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ProductBase.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  cartProducts: PropTypes.object,
};

export default Checkout;
