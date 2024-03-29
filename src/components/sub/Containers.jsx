import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideContainer = styled.div`
  background-color: var(--color-2);
  max-width: 80ex;
  justify-self: center;
  color: var(--color-5);
`;

const NavElement = styled(Link)`
  color: var(--color-5);
  text-align: center;
  display: grid;
  align-items: center;
  padding: 0.5rem;
  &:hover {
    background-color: var(--color-5);
  }
`;
export { AsideContainer, NavElement };

// 27 abril 221
