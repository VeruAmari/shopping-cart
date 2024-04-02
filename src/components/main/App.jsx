// import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const App = ({ children }) => {
  const [products, setProducts] = useState('');
  return (
    <PageContainer>
      <Header />
      <Navbar products={products} />
      <Page>
        <Outlet context={[products, setProducts]} />
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

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default App;
