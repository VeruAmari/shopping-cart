import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../sub/Headers';

const Checkout = ({ children }) => {
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
