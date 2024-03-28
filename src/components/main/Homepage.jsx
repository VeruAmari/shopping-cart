import propTypes from 'prop-types';
import styled from 'styled-components';
import { AsideContainer } from '../sub/Containers';
import { Heading } from '../sub/Headers';
import { LightColorfulButton, DarkButton } from '../sub/Buttons';

const Homepage = ({ children }) => {
  return (
    <>
      {children}
      <Heading level={1} className="header">
        Header
      </Heading>
      <Heading level="2" className="smaller-header">
        Smaller Header
      </Heading>
      <p className="paragraph">Paragraph with some dummy text.</p>
      <ul>
        <li>Dummy 1</li>
        <li>Dummy 2</li>
      </ul>
      <LightColorfulButton>Click me!</LightColorfulButton>
      <DarkButton>No, click me!</DarkButton>
      <AsideContainer>
        Hello, I'm an aside.
        <LightColorfulButton>Click me!</LightColorfulButton>
      </AsideContainer>
    </>
  );
};

export default Homepage;
