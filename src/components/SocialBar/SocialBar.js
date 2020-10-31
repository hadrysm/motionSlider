import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { container, socialList } from './SocialBar.module.scss';

const SocialBar = () => (
  <div className={container}>
    <ul className={socialList}>
      <li>
        <a href="https://github.com/hadrysm" target="_blank" rel="noreferrer">
          <ButtonIcon icon={VscGithubInverted} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/hadrys_m" target="_blank" rel="noreferrer">
          <ButtonIcon icon={VscTwitter} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialBar;
