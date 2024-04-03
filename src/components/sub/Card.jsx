import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Headers';

const radius = '7px';

const Card = ({
  title,
  id,
  price,
  image,
  onClickIncrease,
  onClickDecrease,
  cartProducts,
}) => {
  const onClick = () => {
    console.log(id);
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImg onClick={onClick} src={image} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <Heading level="4">{title}</Heading>
        <Heading level="3">${price}</Heading>
        <button
          onClick={() => {
            onClickIncrease(id);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            onClickDecrease(id);
          }}
        >
          Remove
        </button>
        <Heading level="3">
          {cartProducts[id] ? cartProducts[id] : '0'} on cart.
        </Heading>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 2px 2px 7px var(--color-1);
  grid-template-rows: auto 1fr;
  align-items: space-between;
  box-sizing: border-box;
  display: grid;
  max-width: 250px;
  height: auto;
  border-radius: ${radius};
  background: radial-gradient(var(--color-5), var(--color-3));
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
  align-content: space-between;
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

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onClickDecrease: PropTypes.func,
  onClickIncrease: PropTypes.func,
  cartProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Card;
