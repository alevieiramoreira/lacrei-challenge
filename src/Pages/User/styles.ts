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

  ${media.greaterThan('medium')`
    width: 52rem;
  `}

  > * {
    &:first-child {
      margin-bottom: 3.2rem;
    }
  }

  ${media.lessThan('medium')`
    & > h1 {
      font-size: 2.4rem;
    }
    & > p {
      font-size:  1.8rem;
    }
  `}
`;

export const LeftDivider = styled.div`
  border-left: 5px solid #018762;
  padding-left: 1.6rem;

  ${media.lessThan('medium')`
    & > p {
      font-size:  1.8rem;
    }
  `}
`;

export const ImgContainer = styled.div`
  ${media.lessThan('medium')`
    & > img {
      width: 100%;
    }
  `}
`;
