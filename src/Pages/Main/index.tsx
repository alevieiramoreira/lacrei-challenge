import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContext } from 'contexts/PageContext';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Text from 'components/Text';
import * as S from './styles';

const MainPage = () => {
  const navigate = useNavigate();
  const { setActivePage } = useContext(PageContext);

  return (
    <S.Wrapper>
      <S.IntroContainer>
        <Text as="h1" value="Boas vindas a Lacrei Saúde" />
        <Text
          as="p"
          value="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        />
        <S.ButtonContainer>
          <Button
            action={() => {
              navigate('/user');
              setActivePage('user');
            }}
            active
            text="Pessoa Usuária"
          />
          <Button
            action={() => {
              navigate('/professional');
              setActivePage('professional');
            }}
            text="Profissional"
          />
        </S.ButtonContainer>
      </S.IntroContainer>
      <S.ImgContainer>
        <Logo altText="a" url="logo-1.png" size={100} />
      </S.ImgContainer>
    </S.Wrapper>
  );
};

export default MainPage;
