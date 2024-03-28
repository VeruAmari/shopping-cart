import { useState } from 'react';
import Homepage from './Homepage';
import styled from 'styled-components';
import { PageContainer } from '../sub/Containers';
import Navbar from './Navbar';

const App = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      {children}
    </PageContainer>
  );
};

export default App;
