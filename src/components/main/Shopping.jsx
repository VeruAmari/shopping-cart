import { Outlet, useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Shopping = ({ children }) => {
  const [data, setData] = useState('');
  const [cartProducts, setCartProducts] = useOutletContext();

  useEffect(() => {
    let getData = true;
    if (getData) {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setData(json));
      console.log('Fetched data.');
    }
    return () => {
      getData = false;
    };
  }, []);

  return (
    <>
      <Outlet context={[data, cartProducts, setCartProducts]} />;{children}
    </>
  );
};

Shopping.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Shopping;
