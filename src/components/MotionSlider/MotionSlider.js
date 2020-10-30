import { AnimatePresence } from 'framer-motion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { wrapper, slider, controls } from './MotionSlider.module.scss';

const MotionSlider = () => {
  return (
    <AnimatePresence initial={false}>
      <div className={wrapper}>
        <div className={slider}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>tytuł slidera</h4>
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

export default MotionSlider;
