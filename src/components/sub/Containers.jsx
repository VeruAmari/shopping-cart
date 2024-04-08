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
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: var(--color-5);
    color: var(--color-1);
  }
`;

const ExNavElement = styled(NavElement)`
  border-left: 2px solid var(--color-5);
  border-right: 2px solid var(--color-5);
  background-color: var(--color-1);
`;

export { AsideContainer, NavElement, ExNavElement };
