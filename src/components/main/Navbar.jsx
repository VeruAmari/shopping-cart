import styled from 'styled-components';
import { AsideContainer } from '../sub/Containers';

const Navbar = ({ children }) => {
  return <AsideContainer> {children} </AsideContainer>;
};

export default Navbar;
