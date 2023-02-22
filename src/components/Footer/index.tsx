import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContext } from 'contexts/PageContext';
import { pagesContent } from 'data/pages';
import { socialMedia } from 'data/media';
import Link from 'components/Link';
import Text from 'components/Text';
import * as S from './styles';

const Footer = () => {
  const navigate = useNavigate();
  const { currentPage, setActivePage } = useContext(PageContext);

  return (
    <S.FooterContainer>
      <S.Divider />
      <S.LinkNav>
        <S.UList>
          {pagesContent.map((page) => (
            <S.ListItem key={page.key}>
              <Link
                type="link"
                text={page.title}
                action={() => {
                  navigate(page.key === 'main' ? `/` : `/${page.key}`);
                  setActivePage(page.key);
                }}
                key={page.key}
                active={page.key === currentPage}
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
                imgProps={{
                  altText: `Logo ${media.name}`,
                  size: 3.2,
                  url: `${media.logoUrl}`
                }}
                key={media.name}
                action={() => {
                  window.open(media.href);
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
