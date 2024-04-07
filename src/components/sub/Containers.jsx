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
    color: var(--color-1);
  }
`;

const ExNavElement = styled(NavElement)`
  border-radius: 30px;
  border: 2px solid var(--color-5);
  margin: 1px;
  background-color: var(--color-2);
`;

export { AsideContainer, NavElement, ExNavElement };

// 27 abril 221
