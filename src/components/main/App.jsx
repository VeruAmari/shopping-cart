// import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const App = ({ children }) => {
  const [cartProducts, setCartProducts] = useState('');
  return (
    <PageContainer>
      <Header />
      <Navbar cartProducts={cartProducts} />
      <Page>
        <Outlet context={[cartProducts, setCartProducts]} />
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
  min-height: 100vh;
  width: 100vw;
  box-sizing: content-box;
`;

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default App;
