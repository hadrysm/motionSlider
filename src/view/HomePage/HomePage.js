import MotionSlider from 'components/MotionSlider/MotionSlider';
import { imagesData } from 'data';

import { wrapper, main } from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={wrapper}>
      <main className={main}>
        <MotionSlider data={imagesData} />
      </main>
    </div>
  );
};

export default HomePage;
