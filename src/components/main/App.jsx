import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const App = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <Navbar />
      <Page>
        <Outlet />
        {children}
      </Page>
      <Footer />
    </PageContainer>
  );
};

const Page = styled.article`
  display: grid;
  justify-content: center;
`;

export const PageContainer = styled.div`
  background-color: var(--color-5);
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100vh;
  width: 100vw;
  box-sizing: content-box;
`;

export default App;
