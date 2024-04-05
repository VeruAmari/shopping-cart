import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Card, { CardsContainer } from '../sub/Card';
import Heading from '../sub/Headers';
import Logo from '../sub/Logo';
import Loading from '../sub/Loading';

const Shop = () => {
  const [data, cartProducts, setCartProducts] = useOutletContext();

  const cards = [];

  for (let product of data) {
    cards.push(
      <Card
        id={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        description={product.description}
        image={product.image}
        key={product.id}
        cartProducts={cartProducts}
        cb={setCartProducts}
      ></Card>,
    );
  }
  return (
    <Wrapper>
      <Heading margin="3">
        <Logo size="3" /> Shop
      </Heading>
      {(!data && <Loading />) || <CardsContainer>{cards}</CardsContainer>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;

  display: grid;
`;

export default Shop;
