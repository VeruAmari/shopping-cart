import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Headers';

const Card = ({ title, id, price, description, image }) => {
  const onClick = () => {
    console.log(id);
  };
  return (
    <Wrapper>
      <StyledImg onClick={onClick} src={image} alt={title} />
      <Heading level="3">{title}</Heading>
      <Heading level="3">${price}</Heading>
      <p>{description}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  max-width: 300px;
  height: auto;
  border-radius: 7px;
  background: radial-gradient(var(--color-5), var(--color-3));
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: auto;
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
