import Card from '../src/components/sub/Card';
import { useState } from 'react';
import { render, screen } from '@testing-library/react';

const product = {
  id: 0,
  title: 'Acorn',
  price: 15,
  category: 'Food and drink',
  description: 'A delicious acorn for coffee grind or a meal.',
  image: 'img',
};
const CardContainer = () => {
  const [cartProducts, setCartProducts] = useState('');
  return (
    <Card
      id={product.id}
      title={product.title}
      price={product.price}
      category={product.category}
      description={product.description}
      image={product.image}
      key={product.id}
      cartProducts={cartProducts}
      cb={setCartProducts}
    />
  );
};
describe('Card component', () => {
  it('renders', () => {
    render(<CardContainer />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });
});
