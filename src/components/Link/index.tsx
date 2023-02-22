import Logo, { LogoProps } from 'components/Logo';
import * as S from './styles';

export interface LinkProps {
  type: 'link' | 'image';
  text?: string;
  imgProps?: LogoProps;
  action?: () => void;
  active?: boolean;
}

const Link = ({ type, text, imgProps, action, active }: LinkProps) => {
  return (
    <>
      {type === 'link' && (
        <S.LinkContainer
          aria-label={text}
          tabIndex={0}
          onClick={action}
          role="link"
          active={active}
        >
          {text}
        </S.LinkContainer>
      )}
      {type === 'image' && !!imgProps && (
        <S.LinkContainer
          aria-label={text}
          tabIndex={0}
          role="link"
          active={active}
          onClick={action}
        >
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
