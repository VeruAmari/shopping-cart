import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <SpinningCircle />
      Loading...
    </Wrapper>
  );
};

const SpinningCircle = styled.div`
  box-sizing: border-box;
  border-left: 10px solid var(--color-3, pink);
  border-right: 10px solid var(--color-3, pink);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-radius: 100%;
  height: 100px;
  width: 100px;

  animation: 2s rotate infinite alternate ease-in-out;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  color: var(--color-3);
  display: grid;
  justify-items: center;
  font-weight: 900;
`;

export default Loading;
