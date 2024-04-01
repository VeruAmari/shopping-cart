import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const Shopping = ({ children }) => {
  return (
    <>
      <Outlet />;{children}
    </>
  );
};

Shopping.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Shopping;
