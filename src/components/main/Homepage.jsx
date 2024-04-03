import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AsideContainer } from '../sub/Containers';
import Heading from '../sub/Headers';
import { LightColorfulButton, DarkButton } from '../sub/Buttons';
import Loading from '../sub/Loading';

const Homepage = ({ children }) => {
  return (
    <>
      {children}
      <Heading margin="3" level={1} className="header">
        Welcome to Scui
      </Heading>
      <Heading level="2" className="smaller-header">
        <em>The home of worlds best designer squirrels.</em>
      </Heading>
      <p className="paragraph">
        Were you looking for a new sweater? Or perhaps a set of fancy gloves?
      </p>
      <CircleWrapper>
        <Loading />
        <Circle />
        <Circle />
      </CircleWrapper>
      <LightColorfulButton>Click me!</LightColorfulButton>
      <DarkButton>No, click me!</DarkButton>
      <AsideContainer>
        Hello, I&apos;m an aside.
        <LightColorfulButton>Click me!</LightColorfulButton>
      </AsideContainer>
    </>
  );
};
const CircleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: pink;
`;

Homepage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Homepage;
