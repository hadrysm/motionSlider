import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { motionSliderVariants } from 'variants';
import { useMotionSlider } from 'hooks/useMotionSlider';

import {
  container,
  slider,
  buttonLeft,
  buttonRight,
  contentContainer,
  imgContainer,
} from './MotionSlider.module.scss';

const { containerVariants, imgVariants, textVariants } = motionSliderVariants;

const MotionSlider = ({ data }) => {
  const options = {
    nextSlideTime: 6000,
    swipingThreshold: 100000,
  };

  const {
    state,
    currentIndex,
    handleChangeSlide,
    handleDrag,
  } = useMotionSlider(data, options);

  const { srcImg, name, quote, price } = data[currentIndex];

  const [page, direction] = state;

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
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              src={srcImg}
              alt={name}
            />
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
