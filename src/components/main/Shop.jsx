import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../sub/Card';
import Heading from '../sub/Headers';
import Logo from '../sub/Logo';
import Loading from '../sub/Loading';

const Shop = () => {
  const [data, setProducts] = useOutletContext();

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
        onClick={setProducts}
        key={product.id}
      ></Card>,
    );
  }
  return (
    <Wrapper>
      <Heading>
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
const CardsContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 10px;
  display: grid;
`;

export default Shop;
