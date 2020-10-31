import PropTypes from 'prop-types';

import { button, svgIcon } from './ButtonIcon.module.scss';

const ButtonIcon = ({ icon: Icon, classNames, ...props }) => (
  <button type="button" className={`${button} ${classNames}`} {...props}>
    <Icon className={svgIcon} />
  </button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  classNames: PropTypes.string,
};

ButtonIcon.defaultProps = {
  classNames: '',
};

export default ButtonIcon;
