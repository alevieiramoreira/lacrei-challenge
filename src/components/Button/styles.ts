import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type StyleProps = Pick<ButtonProps, 'active'>;

export const ButtonContainer = styled.button<StyleProps>`
  padding: 1rem;
  background-color: #fff;
  border: 2px solid #018762;
  border-radius: 0.6rem;
  text-align: center;
  transition: 0.2s;
  color: #018762;
  font-size: 1.8rem;
  width: 100%;
  filter: drop-shadow(rgb(0 0 0 / 0.25) 0px 4px 4px);

  &:hover {
    opacity: 0.7;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #018762;
      color: #fff;
    `}
`;
