import PropTypes from 'prop-types';

import { container } from './Layout.module.scss';

const Layout = ({ children }) => {
  return <div className={container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
