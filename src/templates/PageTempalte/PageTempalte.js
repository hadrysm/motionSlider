import PropTypes from 'prop-types';

const PageTempalte = ({ children }) => {
  return <>{children}</>;
};

PageTempalte.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageTempalte;
