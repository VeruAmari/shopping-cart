import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ level, children, margin }) => {
  const tag = `h${level}`;
  return (
    <Wrapper margin={margin} as={tag}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h1`
  margin: ${(props) => props.margin + 'rem' || '0.5rem'};
  display: flex;
  justify-content: center;
`;

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Heading;
