import styled from 'styled-components';

export const LinkContainer = styled.a`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 0.5;
    transition: 0.3s;
  }
  &:active {
    font-weight: 800;
  }
`;
