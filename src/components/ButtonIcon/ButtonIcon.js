import PropTypes from 'prop-types';

import { button, svgIcon } from './ButtonIcon.module.scss';

const ButtonIcon = ({ icon: Icon, ...props }) => (
  <button type="button" className={button} {...props}>
    <Icon className={svgIcon} />
  </button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default ButtonIcon;
