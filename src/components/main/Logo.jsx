import styled from 'styled-components';
import { NavElement } from '../sub/Containers';
import { HeaderWrapper } from './Header';

const Logo = () => {
  return <LogoWrapper>Scui</LogoWrapper>;
};

const LogoWrapper = styled.span`
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
