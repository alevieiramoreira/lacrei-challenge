import Button from 'components/Button';
import Logo from 'components/Logo';
import Text from 'components/Text';
import * as S from './styles';

const MainPage = () => (
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
            console.log('hi!');
          }}
          text="Pessoa Usuária"
        />
        <Button
          action={() => {
            console.log('hi!');
          }}
          text="Profissional"
        />
      </S.ButtonContainer>
    </S.IntroContainer>
    <div>
      <Logo altText="a" url="logo-1.png" size={55} />
    </div>
  </S.Wrapper>
);

export default MainPage;
