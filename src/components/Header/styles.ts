import styled from 'styled-components';

export const Container = styled.header`
  background-color: #eee;
  width: 100%;
  display: flex;
  padding: 0.8rem 6.4rem;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.a`
  color: #018762;
  font-size: 3.2rem;
  font-weight: 600;
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.5;
    transition: 0.3s;
  }
`;

export const Nav = styled.nav`
  align-items: center;
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
