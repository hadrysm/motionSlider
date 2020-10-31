import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { motionSliderVariants } from 'variants';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import {
  container,
  slider,
  controls,
  contentContainer,
  imgContainer,
} from './MotionSlider.module.scss';

const { containerVariants, imgVariants, textVariants } = motionSliderVariants;

const MotionSlider = ({ data }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // wrap(0, 1, 0.5); // 0.5
  // wrap(0, 1, 1.5); // 0.5
  const currentIndex = wrap(0, data.length, page);

  const { srcImg, name, quote, price } = data[currentIndex];

  const handleChangeSlide = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  return (
    <div className={container}>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          key={page}
          custom={direction}
          className={slider}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div className={imgContainer} variants={imgVariants}>
            <img src={srcImg} alt={name} />
          </motion.div>
          <div className={contentContainer}>
            <motion.h4 variants={textVariants}>{quote}</motion.h4>
            <motion.span variants={textVariants}>{name}</motion.span>
            <motion.p variants={textVariants}>{price}</motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={controls}>
        <ButtonIcon
          icon={MdNavigateBefore}
          onClick={() => handleChangeSlide(-1)}
        />
        <ButtonIcon
          icon={MdNavigateNext}
          onClick={() => handleChangeSlide(1)}
        />
      </div>
    </div>
  );
};

MotionSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MotionSlider;
