import styled from 'styled-components';
import { NavElement } from './Containers';
import { HeaderWrapper } from '../main/Header';

const Logo = () => {
  return <LogoWrapper>Scui</LogoWrapper>;
};

const LogoWrapper = styled.span`
  font-family: var(--logo-font-family);
  font-style: var(--logo-font-style);
  font-weight: var(--logo-font-weight);
  font-size: 1.2rem;

  ${HeaderWrapper} > & {
    color: var(--color-5);
  }
  ${NavElement} > & {
    color: var(--color-5);
  }
  ${NavElement}:hover > & {
    color: var(--color-1);
  }
`;

export default Logo;
