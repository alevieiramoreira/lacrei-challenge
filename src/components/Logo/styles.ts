import styled from 'styled-components';

interface LogoImgProps {
  size: number;
}

export const LogoImg = styled.img<LogoImgProps>`
  width: max(${(props) => props.size}%);
  position: relative;
`;
