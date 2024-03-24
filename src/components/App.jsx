import { useState } from 'react';
import styled from 'styled-components';
import { H1, H2, H3, H4, H5, H6 } from './Headers';
import { DefaultButton, CuterButton } from './Buttons';

function App() {
  const [count, setCount] = useState(0);

  const Container = styled.div`
    display: grid;
    justify-content: center;
  `;

  return (
    <>
      <Container>
        <H1 className="header">Header</H1>
        <H2 className="smaller-header">Smaller Header</H2>
        <p className="paragraph">Paragraph with some dummy text.</p>
        <ul>
          <li>Dummy 1</li>
          <li>Dummy 2</li>
        </ul>
        <DefaultButton>Click me!</DefaultButton>
        <CuterButton>No, click me!</CuterButton>
      </Container>
    </>
  );
}

export default App;
