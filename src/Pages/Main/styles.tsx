import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6.4rem;
  padding-bottom: 1.6rem;
`;

export const IntroContainer = styled.div`
  justify-content: space-between;
  width: 48rem;
  > * {
    &:first-child {
      margin-bottom: 3.2rem;
    }
    &:last-child {
      margin-right: 2.4rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin-top: 4.8rem;
`;
