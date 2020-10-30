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
            <img src={data[1].srcImg} alt="" />
          </div>
          <div className={contentContainer}>
            <h4>
              Its all good. I was amazed at th quality of the Design. We ve seen
            </h4>
            <p>Jessica Span</p>
            <p>lorem asd sa asdasd asddas das dasd asd as asd as dsad as</p>
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
