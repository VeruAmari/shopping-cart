import { useState } from 'react';
import Homepage from './Homepage';
import styled, { createGlobalStyle } from 'styled-components';
import { H1, H2, H3, H4, H5, H6 } from '../sub/Headers';
import { LightColorfulButton, DarkButton } from '../sub/Buttons';
const GlobalStyles = createGlobalStyle`
  html {
    --basic-color: pink;
    --color-1: #333745;
    --color-2: #E63462;
    --color-3: #D4C2FC;
    --color-4: #C7EFCF;
    --color-5: #EEF5DB;

    --light-background: var(--color-5);
    --dark-background: var(--color-1);
    
  };
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Homepage>
        <H1 className="header">Header</H1>
        <H2 className="smaller-header">Smaller Header</H2>
        <p className="paragraph">Paragraph with some dummy text.</p>
        <ul>
          <li>Dummy 1</li>
          <li>Dummy 2</li>
        </ul>
        <LightColorfulButton>Click me!</LightColorfulButton>
        <DarkButton>No, click me!</DarkButton>
      </Homepage>
    </>
  );
};

export default App;
