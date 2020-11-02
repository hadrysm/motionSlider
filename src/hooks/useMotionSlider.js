import { useState, useEffect, useRef } from 'react';
import { wrap } from 'popmotion';
import { swipePower } from 'helpers';

export const useMotionSlider = (data, { nextSlideTime, swipingThreshold }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const intervalRef = useRef(0);

  const currentIndex = wrap(0, data.length, page);

  const handleChangeSlide = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const handleDrag = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipingThreshold) {
      handleChangeSlide(1);
    } else if (swipe > swipingThreshold) {
      handleChangeSlide(-1);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(
      () => handleChangeSlide(1),
      nextSlideTime,
    );

    return () => clearInterval(intervalRef.current);
  }, [handleChangeSlide]);

  return {
    state: [page, direction],
    currentIndex,
    handleChangeSlide,
    handleDrag,
  };
};
