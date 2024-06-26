import styled from 'styled-components';
import { NavElement } from './Containers';
import { HeaderWrapper } from '../main/Header';
import PropTypes from 'prop-types';

const Logo = ({ size }) => {
  return <LogoWrapper size={size}>Scui</LogoWrapper>;
};

export const OuterLogoWrapper = styled.div`
  border-radius: 90%;
  border: 1px solid var(--color-2);
  border-left-width: 2px;
  border-top-width: 5px;
  border-right-style: dotted;
`;
const LogoWrapper = styled.span`
  font-family: var(--logo-font-family);
  font-style: var(--logo-font-style);
  font-weight: var(--logo-font-weight);

  font-size: ${(props) => props.size + 'rem'};

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

Logo.defaultProps = {
  size: '1',
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
