import MotionSlider from 'components/MotionSlider/MotionSlider';
import { imagesData } from 'data';

import { wrapper, main } from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={wrapper}>
      <header>
        <h2>Motion slider</h2>
      </header>
      <main className={main}>
        <MotionSlider data={imagesData} />
      </main>
    </div>
  );
};

export default HomePage;
