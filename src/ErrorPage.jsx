import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from './components/sub/Headers';
import { PageContainer } from './components/main/App';

const ErrorPage = ({ children }) => {
  return (
    <PageContainer>
      <Heading level="1">Oh no! This route doesn&apos;t exist!</Heading>
      {children}
      <Link to="/">You can go back to the home page by clicking here.</Link>
    </PageContainer>
  );
};

ErrorPage.propTypes = {
  children: PropTypes.any,
};

export default ErrorPage;
