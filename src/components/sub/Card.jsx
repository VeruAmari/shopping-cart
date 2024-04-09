import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Headers';
import { AsideContainer } from './Containers';

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
    outline: `${isOnCart ? '3px var(--color-1) solid' : 'none'}`,
  };

  return (
    <Wrapper style={conditionalStyle}>
      <ImageWrapper>
        <StyledImg src={image} alt={title} />
      </ImageWrapper>
      <FixedAsideContainer />
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
          <CurrentAmount
            as="input"
            type="tel"
            onChange={(event) => {
              cb((current) => {
                const value = Number(event.target.value);
                const newValue = Number.isNaN(value) ? 0 : value;
                return {
                  ...current,
                  [id]: newValue,
                };
              });
            }}
            value={cartProducts[id] ? cartProducts[id] : '0'}
          />
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

const FixedAsideContainer = styled(AsideContainer)`
  height: 0.5rem;
`;

const ProductName = styled.p`
  display: grid;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SharedStyles = styled.div`
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

const CurrentAmount = styled(SharedStyles)`
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  border: none;
`;

const SharedButtonStyles = styled(SharedStyles)`
  user-select: none;
  font-size: 2rem;
  border-radius: 5px;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
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
  display: grid;
  width: 250px;
  height: auto;
  max-height: 500px;
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
  padding: 0.5rem;
  display: grid;
  justify-content: center;
  justify-items: center;
  overflow: scroll;
  max-height: 100%;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
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
