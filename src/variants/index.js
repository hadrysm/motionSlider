const childTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 15,
};

export const motionSliderVariants = {
  containerVariants: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  imgVariants: {
    hidden: (direction) => {
      return {
        x: direction ? -30 : 30,
        opacity: 0,
      };
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: !direction ? 30 : -30,
        opacity: 0,
      };
    },
  },

  textVariants: {
    hidden: {
      y: -50,
      opacity: 0,
      transition: childTransition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: childTransition,
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: childTransition,
    },
  },
};
