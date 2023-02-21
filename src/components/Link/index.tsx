import Logo, { LogoProps } from 'components/Logo';
import * as S from './styles';

interface LinkProps {
  type: 'link' | 'image';
  href: string;
  text?: string;
  imgProps?: LogoProps;
}

const Link = ({ type, href, text, imgProps }: LinkProps) => {
  return (
    <>
      {type === 'link' && (
        <S.LinkContainer href={href} aria-label={text} tabIndex={0}>
          {text}
        </S.LinkContainer>
      )}
      {type === 'image' && !!imgProps && (
        <S.LinkContainer href={href} aria-label={text} tabIndex={0}>
          <Logo
            altText={imgProps.altText}
            size={imgProps.size}
            url={imgProps.url}
          />
        </S.LinkContainer>
      )}
    </>
  );
};

export default Link;
