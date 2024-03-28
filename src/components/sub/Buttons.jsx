import styled from 'styled-components';
import { AsideContainer } from './Containers';

const LightColorfulButton = styled.button`
  background-color: var(--color-4);
  color: var(--color-2);
  border: 1px solid var(--color-2);
  &:hover {
    background-color: var(--color-2);
    color: var(--color-5);
    border-color: var(--color-2);
  }
  ${AsideContainer} & {
    border-color: var(--color-4);
  }
  ${AsideContainer} &:hover {
    background-color: var(--color-5);
    color: var(--color-1);
    border-color: var(--color-1);
  }
`;

const DarkButton = styled.button`
  background-color: var(--color-1);
  color: var(--color-4);
  border: 1px solid var(--color-1);
  &:hover {
    background-color: var(--color-4);
    color: var(--color-1);
    border-color: var(--color-1);
  }
`;

export { LightColorfulButton, DarkButton };
