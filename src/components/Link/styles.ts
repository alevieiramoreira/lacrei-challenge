import styled, { css } from 'styled-components';
import { LinkProps } from '.';

type StyleProps = Pick<LinkProps, 'active'>;

export const LinkContainer = styled.button<StyleProps>`
  color: #1f1f1f;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;

  &:hover,
  &:focus {
    transition: 0.3s;
  }
  ${({ active }) =>
    active &&
    css`
      color: #018762;
      font-weight: 800;
    `}
`;
