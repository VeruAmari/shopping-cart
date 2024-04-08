import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../sub/Headers';
import img0 from './img0.jpg';
import img1 from './img1.jpg';
import { AsideContainer } from '../sub/Containers';

const Homepage = ({ children }) => {
  return (
    <>
      {children}
      <Heading margin="2" level={1}>
        Welcome to Scui
      </Heading>
      <AsideContainer>
        <Heading level="2" margin=".5">
          <em>Worlds best tailor squirrels workshop.</em>
        </Heading>
      </AsideContainer>
      <Image0 />
      <AsideContainer></AsideContainer>
      <ArticleWrapper>
        <Image1 />
        <ArticleContent>
          Here, squirrels design and build at their hearts content. We provide
          only a means for them to sell their products.
        </ArticleContent>
      </ArticleWrapper>
    </>
  );
};

const ArticleContent = styled.p`
  padding: 2rem;
  max-width: 50ex;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-template-rows: 1fr;
  margin: 2rem;
`;

const Image0 = styled.div`
  width: 100vw;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${img0});
  background-position: center 30%;
`;

const Image1 = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${img1});
  background-position: center 30%;
`;

Homepage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Homepage;
