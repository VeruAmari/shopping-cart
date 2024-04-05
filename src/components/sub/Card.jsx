import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Headers';

const radius = '7px';

const Card = ({ title, id, price, image, cartProducts, cb }) => {
  const onClickIncrease = (id, callBack) => {
    callBack((current) => {
      const newValue = current[id] ? current[id] + 1 : 1;

      return { ...current, [id]: newValue };
    });
  };

  const onClickDecrease = (id, callBack) => {
    callBack((current) => {
      const newValue = current[id] ? current[id] - 1 : 0;

      return { ...current, [id]: newValue };
    });
  };

  const isOnCart = !!cartProducts[id];

  const conditionalStyle = {
    outline: `${isOnCart ? '3px var(--color-2) solid' : 'none'}`,
  };

  return (
    <Wrapper style={conditionalStyle}>
      <ImageWrapper>
        <StyledImg src={image} alt={title} />
      </ImageWrapper>
      <ProductName>{title}</ProductName>
      <ContentWrapper>
        <Heading level="3">${price}</Heading>
        <ButtonsContainer>
          <MinusButton
            onClick={() => {
              onClickDecrease(id, cb);
            }}
          >
            -
          </MinusButton>
          <CurrentAmount>
            {cartProducts[id] ? cartProducts[id] : '0'}
          </CurrentAmount>
          <PlusButton
            onClick={() => {
              onClickIncrease(id, cb);
            }}
          >
            +
          </PlusButton>
        </ButtonsContainer>

        <Heading level="4"></Heading>
      </ContentWrapper>
    </Wrapper>
  );
};

const ProductName = styled.p`
  display: grid;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const CurrentAmount = styled.div`
  font-size: 1rem;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 2rem;
  background-color: var(--color-5);
  color: var(--color-1);
  height: 2rem;
  display: grid;
  padding: 0;
`;
const SharedButtonStyles = styled(CurrentAmount)`
  user-select: none;
  font-size: 2rem;
  border-radius: 5px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:hover {
    color: var(--color-5);
  }
`;
const PlusButton = styled(SharedButtonStyles)`
  border-top-left-radius: 0%;
  border-left: 1px dotted var(--color-1);
  border-bottom-left-radius: 0%;
  &:hover {
    background-color: var(--color-3);
  }
`;
const MinusButton = styled(SharedButtonStyles)`
  border-right: 1px dotted var(--color-1);
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  &:hover {
    background-color: var(--color-2);
  }
`;
const ButtonsContainer = styled.div`
  align-self: end;
  justify-items: center;
  justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
`;
const Wrapper = styled.div`
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  grid-template-rows: auto 1fr;
  align-items: space-between;
  box-sizing: border-box;
  display: grid;
  width: 250px;
  height: auto;
  border-radius: ${radius};
  background: radial-gradient(var(--color-5), var(--color-3));
  &:hover {
    box-shadow: 5px 5px 15px rgba(20, 0, 0, 0.5);
  }
`;
const ImageWrapper = styled.div`
  border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
  display: grid;
  justify-content: center;
  justify-items: center;
  background-color: white;
  width: 100%;
  max-height: 200px;
`;

const ContentWrapper = styled.div`
  align-items: start;
  align-content: end;
  padding: 1rem;
  display: grid;
  justify-content: center;
  justify-items: center;
`;

const StyledImg = styled.img`
  border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
  max-width: 100%;
  max-height: 200px;
`;

export const CardsContainer = styled.div`
  padding: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  display: grid;
`;

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  cb: PropTypes.func,
  cartProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Card;
