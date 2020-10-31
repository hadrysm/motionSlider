import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { buttonIconVariants } from 'variants';
import { button, svgIcon } from './ButtonIcon.module.scss';

const ButtonIcon = ({ icon: Icon, classNames, ...props }) => (
  <motion.button
    type="button"
    className={`${button} ${classNames}`}
    {...props}
    variants={buttonIconVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <Icon className={svgIcon} />
  </motion.button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  classNames: PropTypes.string,
};

ButtonIcon.defaultProps = {
  classNames: '',
};

export default ButtonIcon;
