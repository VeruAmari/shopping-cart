import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <Link to="/">Scui</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/ckeckout">Checkout</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: start;
`;

export default Navbar;
