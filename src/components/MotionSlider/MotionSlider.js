import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { motionSliderVariants } from 'variants';
import { swipePower } from 'helpers';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import {
  container,
  slider,
  buttonLeft,
  buttonRight,
  contentContainer,
  imgContainer,
} from './MotionSlider.module.scss';

const { containerVariants, imgVariants, textVariants } = motionSliderVariants;

// can swipe
const swipingThreshold = 100000;

const MotionSlider = ({ data }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // wrap(0, 1, 0.5); // 0.5
  // wrap(0, 1, 1.5); // 0.5
  const currentIndex = wrap(0, data.length, page);

  const { srcImg, name, quote, price } = data[currentIndex];

  const handleChangeSlide = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const handleDrag = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe > swipingThreshold) {
      handleChangeSlide(1);
    } else if (swipe < swipingThreshold) {
      handleChangeSlide(-1);
    }
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
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, info) => handleDrag(e, info)}
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

      <ButtonIcon
        classNames={buttonLeft}
        icon={MdNavigateBefore}
        onClick={() => handleChangeSlide(-1)}
      />
      <ButtonIcon
        classNames={buttonRight}
        icon={MdNavigateNext}
        onClick={() => handleChangeSlide(1)}
      />
    </div>
  );
};

MotionSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MotionSlider;
