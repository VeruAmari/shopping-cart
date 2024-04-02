import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Headers';

const Card = ({ title, id, price, description, image }) => {
  const onClick = () => {
    console.log(id);
  };
  let hover = false;
  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImg onClick={onClick} src={image} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <Heading level="3">{title}</Heading>
        <Heading level="3">${price}</Heading>
        {hover && <p>{description}</p>}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 2px 2px 7px var(--color-1);
  justify-content: center;
  justify-items: center;
  box-sizing: border-box;
  display: grid;
  max-width: 300px;
  height: auto;
  border-radius: 7px;
  background: radial-gradient(var(--color-5), var(--color-3));
`;
const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  background-color: white;
  width: 100%;
  max-height: 200px;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  display: grid;
  justify-content: center;
  justify-items: center;
`;

const StyledImg = styled.img`
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
};

export default Card;
