import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6.4rem;
  padding-bottom: 1.6rem;

  ${media.lessThan('medium')`
    align-content: center;
    flex-direction: column;
    padding: 3rem;
  `}
`;

export const IntroContainer = styled.div`
  justify-content: space-between;

  > * {
    &:first-child {
      margin-bottom: 3.2rem;
    }
    &:last-child {
      margin-right: 2.4rem;
    }
  }

  ${media.greaterThan('medium')`
    width: 52rem;
  `}

  ${media.lessThan('medium')`
    & > h1 {
      font-size: 2.4rem;
    }
    & > p {
      font-size:  1.8rem;
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin-top: 4.8rem;

  ${media.lessThan('medium')`
   margin-bottom: 4rem;
   gap: 4rem;
  `}
`;

export const ImgContainer = styled.div`
  ${media.lessThan('medium')`
    & > img {
      width: 100%;
    }
  `}
`;
