import Logo from 'components/Logo';
import Text from 'components/Text';
import * as S from './styles';

const UserPage = () => {
  return (
    <S.Wrapper>
      <S.IntroContainer>
        <Text as="h1" value="Pessoa Usuária" />
        <S.LeftDivider>
          <Text
            as="p"
            value="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
          />
        </S.LeftDivider>
      </S.IntroContainer>
      <div>
        <Logo altText="a" url="logo-2.png" size={54} />
      </div>
    </S.Wrapper>
  );
};

export default UserPage;
