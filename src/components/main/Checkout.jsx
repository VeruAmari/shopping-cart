import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../sub/Headers';
import { useOutletContext } from 'react-router-dom';

const Checkout = ({ children }) => {
  const [data, products, setProducts] = useOutletContext();
  console.log(data, products, setProducts);
  return (
    <Wrapper>
      <Heading>Checkout Page</Heading>
      {children}
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
