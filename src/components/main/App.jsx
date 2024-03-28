import { useState } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../sub/Containers';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const App = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

export default App;
