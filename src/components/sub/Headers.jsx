import styled from 'styled-components';

const Heading = ({ level, children }) => {
  const tag = `h${level}`;
  return <Wrapper as={tag}>{children}</Wrapper>;
};

const Wrapper = styled.h1``;

export { Heading };
