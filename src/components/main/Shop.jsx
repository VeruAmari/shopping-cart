import { useOutletContext } from 'react-router-dom';

const Shop = () => {
  const [data, products, setProducts] = useOutletContext();

  console.log(data, products, setProducts);
  return <div>Shopping Page</div>;
};

export default Shop;
