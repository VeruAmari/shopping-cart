import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../sub/Headers';
import { useOutletContext } from 'react-router-dom';
import Card, { CardsContainer } from '../sub/Card';
const Checkout = ({ children }) => {
  const [data, cartProducts, setCartProducts] = useOutletContext();
  const onClickIncrease = (id) => {
    setCartProducts((current) => {
      const newValue = current[id] ? current[id] + 1 : 1;

      return { ...current, [id]: newValue };
    });
  };
  const onClickDecrease = (id) => {
    setCartProducts((current) => {
      const newValue = current[id] ? current[id] - 1 : 0;

      return { ...current, [id]: newValue };
    });
  };
  const cards = [];
  for (let product of data) {
    if (cartProducts[product.id]) {
      cards.push(
        <Card
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          image={product.image}
          key={product.id}
          context={[data]}
          cartProducts={cartProducts}
          onClickDecrease={onClickDecrease}
          onClickIncrease={onClickIncrease}
        ></Card>,
      );
    }
  }

  return (
    <Wrapper>
      <Heading margin="3">Checkout Page</Heading>
      {children}
      {(!cards[0] && (
        <Heading level="2">There are no products in your cart!</Heading>
      )) || <CardsContainer>{cards}</CardsContainer>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
`;

Checkout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Checkout;
