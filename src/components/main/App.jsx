import { useState } from 'react';
import Homepage from './Homepage';
import styled from 'styled-components';
import { PageContainer } from '../sub/Containers';

const App = () => {
  return (
    <PageContainer>
      <Homepage />
    </PageContainer>
  );
};

export default App;
