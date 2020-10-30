import PropTypes from 'prop-types';

import Layout from 'templates/Layout/Layout';
import Wrapper from 'components/Wrapper/Wrapper';
import SocialBar from 'components/SocialBar/SocialBar';

const PageTempalte = ({ children }) => {
  return (
    <Layout>
      <Wrapper isFlex isColumn>
        {children}
        <SocialBar />
      </Wrapper>
    </Layout>
  );
};

PageTempalte.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageTempalte;
