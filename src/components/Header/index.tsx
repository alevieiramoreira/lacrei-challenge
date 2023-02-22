import { useContext } from 'react';

import Link from 'components/Link';
import { PageContext } from 'contexts/PageContext';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { pagesContent } from 'data/pages';

const Header = () => {
  const navigate = useNavigate();
  const { currentPage, setActivePage } = useContext(PageContext);

  return (
    <S.Container>
      <S.Title href="/">Lacrei</S.Title>
      <S.Nav>
        <S.UList>
          {pagesContent.map((page) => (
            <S.ListItem key={page.key}>
              <Link
                type="link"
                text={page.title}
                key={page.key}
                aria-current={currentPage === page.key ? 'page' : undefined}
                action={() => {
                  navigate(page.key === 'main' ? `/` : `/${page.key}`);
                  setActivePage(page.key);
                }}
                active={page.key === currentPage}
              />
            </S.ListItem>
          ))}
        </S.UList>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
