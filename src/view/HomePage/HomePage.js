import MotionSlider from 'components/MotionSlider/MotionSlider';
import { imagesData } from 'data';

import { wrapper, main } from './HomePage.module.scss';

const HomePage = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className={wrapper}>
      <main className={main}>
        <MotionSlider data={imagesData} />
      </main>
    </div>
  );
};

export default HomePage;
