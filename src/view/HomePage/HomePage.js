import MotionSlider from 'components/MotionSlider/MotionSlider';
import { wrapper, main } from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={wrapper}>
      <header>
        <h2>Motion slider</h2>
      </header>
      <main className={main}>
        <MotionSlider />
      </main>
    </div>
  );
};

export default HomePage;
