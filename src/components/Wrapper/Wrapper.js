import PropTypes from 'prop-types';

import { container, flex, column } from './Wrapper.module.scss';

const Wrapper = ({ children, isFlex, isColumn }) => {
  const className = `
  ${container}
  ${isFlex && flex}
  ${isColumn && column}
  `;

  return <div className={className}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isFlex: PropTypes.bool,
  isColumn: PropTypes.bool,
};

Wrapper.defaultProps = {
  isFlex: false,
  isColumn: false,
};

export default Wrapper;
