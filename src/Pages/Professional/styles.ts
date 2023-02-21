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
  width: 52rem;
  > * {
    &:first-child {
      margin-bottom: 3.2rem;
    }
  }
`;

export const LeftDivider = styled.div`
  border-left: 5px solid #018762;
  padding-left: 1.6rem;
`;
