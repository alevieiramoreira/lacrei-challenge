import Link from 'components/Link';
import Text from 'components/Text';
import * as S from './styles';
interface HeaderProps {
  currentPage: 'main' | 'user' | 'professional';
}

const Footer = ({ currentPage }: HeaderProps) => {
  const pagesContent = [
    {
      key: 'main',
      text: 'Home'
    },
    {
      key: 'user',
      text: 'Pessoa Usuária'
    },
    {
      key: 'professional',
      text: 'Profissional'
    }
  ];

  const socialMedia = [
    {
      name: 'instagram',
      href: 'https://www.instagram.com/lacrei.saude/',
      logoUrl: '/instagram-logo.png'
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/lacrei.saude/',
      logoUrl: '/facebook-logo.png'
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/company/lacrei/',
      logoUrl: '/linkedin-logo.png'
    }
  ];

  return (
    <S.FooterContainer>
      <S.Divider />
      <S.LinkNav>
        <S.UList>
          {pagesContent.map((page) => (
            <S.ListItem key={page.key}>
              <Link
                type="link"
                text={page.text}
                href={`/${page.key}`}
                key={page.key}
                aria-current={currentPage === page.key ? 'page' : undefined}
              />
            </S.ListItem>
          ))}
        </S.UList>
      </S.LinkNav>
      <S.LinkNav>
        <S.UList>
          {socialMedia.map((media) => (
            <S.ListItem key={media.name}>
              <Link
                type="image"
                href={media.href}
                imgProps={{
                  altText: `Logo ${media.name}`,
                  size: 3.2,
                  url: `${media.logoUrl}`
                }}
              />
            </S.ListItem>
          ))}
        </S.UList>
      </S.LinkNav>
      <Text as="span" value="Desafio Front-end Lacrei" />
    </S.FooterContainer>
  );
};

export default Footer;
