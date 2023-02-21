import Link from 'components/Link';
import * as S from './styles';

interface HeaderProps {
  currentPage: 'main' | 'user' | 'professional';
}

const Header = ({ currentPage }: HeaderProps) => {
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

  return (
    <S.Container>
      <S.Title href="/">Lacrei</S.Title>
      <S.Nav>
        <S.UList>
          {pagesContent.map((page) => (
            <S.ListItem key={page.key}>
              <Link
                type="link"
                text={page.text}
                href={page.key === 'main' ? `/` : `/${page.key}`}
                key={page.key}
                aria-current={currentPage === page.key ? 'page' : undefined}
              />
            </S.ListItem>
          ))}
        </S.UList>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
