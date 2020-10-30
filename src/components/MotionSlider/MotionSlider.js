import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import {
  container,
  slider,
  controls,
  contentContainer,
  imgContainer,
} from './MotionSlider.module.scss';

const MotionSlider = ({ data }) => {
  return (
    <AnimatePresence initial={false}>
      <div className={container}>
        <div className={slider}>
          <div className={imgContainer}>
            <img src={data[2].srcImg} alt="" />
          </div>
          <div className={contentContainer}>
            <h4>{data[2].quote}</h4>
            <span>{data[2].name}</span>
            <p>{data[2].price}</p>
          </div>
        </div>
        <div className={controls}>
          <ButtonIcon icon={MdNavigateBefore} />
          <ButtonIcon icon={MdNavigateNext} />
        </div>
      </div>
    </AnimatePresence>
  );
};

MotionSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MotionSlider;
