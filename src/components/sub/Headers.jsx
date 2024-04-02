import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ level, children }) => {
  const tag = `h${level}`;
  return <Wrapper as={tag}>{children}</Wrapper>;
};

const Wrapper = styled.h1`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
`;

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Heading;
