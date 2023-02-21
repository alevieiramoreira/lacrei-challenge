import * as S from './styles';

export interface LogoProps {
  url: string;
  altText: string;
  size: number;
}

const Logo = ({ url, altText, size }: LogoProps) => {
  return <S.LogoImg src={url} alt={altText} size={size} role="presentation" />;
};

export default Logo;
