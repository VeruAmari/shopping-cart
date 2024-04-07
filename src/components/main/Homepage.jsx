import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AsideContainer } from '../sub/Containers';
import Heading from '../sub/Headers';
import { LightColorfulButton, DarkButton } from '../sub/Buttons';
import img0 from './img0.jpg';

const Homepage = ({ children }) => {
  return (
    <>
      {children}
      <Heading margin="3" level={1} className="header">
        Welcome to Scui
      </Heading>
      <Heading level="2" className="smaller-header">
        <em>The home of worlds best tailor squirrels.</em>
      </Heading>
      <Image0 />
      <Heading level="3" className="paragraph">
        We are squirrels, we design and build.
      </Heading>
      <LightColorfulButton>Click me!</LightColorfulButton>
      <DarkButton>No, click me!</DarkButton>
      <AsideContainer>
        Hello, I&apos;m an aside.
        <LightColorfulButton>Click me!</LightColorfulButton>
      </AsideContainer>
    </>
  );
};

/*
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
*/

const Image0 = styled.div`
  width: 80vw;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${img0});
  background-position: center 30%;
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
