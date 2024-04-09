import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideContainer = styled.div`
  border-top: solid 3px var(--color-5);
  border-bottom: solid 3px var(--color-5);
  background-color: var(--color-2);
  width: 100%;
  justify-self: center;
  min-height: 0.5rem;
  color: var(--color-5);
`;

const NavElement = styled(Link)`
  border: transparent 15px solid;
  border-bottom: 5px solid var(--color-5);
  border-top: 5px solid var(--color-5);
  border-left-color: var(--color-3);
  border-right-color: var(--color-3);
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
  background-color: var(--color-1);
`;

export { AsideContainer, NavElement, ExNavElement };
