import PropTypes from 'prop-types';

import { button, svgIcon } from './ButtonIcon.module.scss';

const ButtonIcon = ({ icon: Icon }) => (
  <button type="button" className={button}>
    <Icon className={svgIcon} />
  </button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default ButtonIcon;
