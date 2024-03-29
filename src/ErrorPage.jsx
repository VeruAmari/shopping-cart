import { Link } from 'react-router-dom';
import { Heading } from './components/sub/Headers';
import { PageContainer } from './components/main/App';

const ErrorPage = () => {
  return (
    <PageContainer>
      <Heading level="1">Oh no! This route doesn't exist!</Heading>
      <Link to="/">You can go back to the home page by clicking here.</Link>
    </PageContainer>
  );
};

export default ErrorPage;
