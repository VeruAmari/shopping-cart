import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../sub/Card';
import Heading from '../sub/Headers';
import Logo from '../sub/Logo';
import Loading from '../sub/Loading';

const Shop = () => {
  const [data, cartProducts, setCartProducts] = useOutletContext();

  console.log('Cart products:', cartProducts);

  const cards = [];
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
        context={[data]}
        cartProducts={cartProducts}
        onClickDecrease={onClickDecrease}
        onClickIncrease={onClickIncrease}
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
const CardsContainer = styled.div`
  padding: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  display: grid;
`;

export default Shop;
