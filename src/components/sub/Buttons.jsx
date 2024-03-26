import styled from 'styled-components';

const LightColorfulButton = styled.button`
  background-color: var(--color-5);
  color: var(--color-2);
  border: 1px solid var(--color-4);
  &:hover {
    background-color: var(--color-2);
    color: var(--color-5);
    border-color: var(--color-2);
  }
`;

const DarkButton = styled.button`
  background-color: var(--color-1);
  color: var(--color-4);
  border: 1px solid var(--color-4);
  &:hover {
    background-color: var(--color-4);
    color: var(--color-1);
    border-color: var(--color-1);
  }
`;

export { LightColorfulButton, DarkButton };
