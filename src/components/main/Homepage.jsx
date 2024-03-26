import propTypes from 'prop-types';
import styled from 'styled-components';
import { PageContainer, AsideContainer } from '../sub/Containers';
import { LightColorfulButton } from '../sub/Buttons';

const Homepage = ({ children }) => {
  return (
    <PageContainer>
      {children}

      <AsideContainer>
        Hello, I'm an aside.
        <LightColorfulButton>Click me!</LightColorfulButton>
      </AsideContainer>
    </PageContainer>
  );
};

export default Homepage;
