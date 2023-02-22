import styled from 'styled-components';
import media from 'styled-media-query';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 6.4rem;
  position: fixed;
  bottom: 4rem;

  ${media.lessThan('large')`
    flex-direction: column;
    position: relative;
    padding-top: 2rem;
    bottom: 0;
  `}
`;

export const LinkNav = styled.nav`
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #b0e0d3;
  margin-bottom: 3.2rem;
`;

export const Link = styled.a`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  &:not(:last-of-type) {
    margin-right: 4rem;
  }
  &:hover,
  &:focus {
    opacity: 0.5;
    transition: 0.3s;
  }
  &:active {
    font-weight: 800;
  }
`;

export const UList = styled.ul`
  display: flex;
  height: 100%;
  text-align: center;
  list-style-type: none;
`;

export const ListItem = styled.li`
  text-decoration: none;
  &:not(:last-of-type) {
    margin-right: 4rem;
  }
`;
