import Logo from 'components/Logo';
import Text from 'components/Text';
import * as S from './styles';

const ProfessionalPage = () => {
  return (
    <S.Wrapper>
      <S.IntroContainer>
        <Text as="h1" value="Profissional" />
        <S.LeftDivider>
          <Text
            as="p"
            value="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
          />
        </S.LeftDivider>
      </S.IntroContainer>
      <div>
        <Logo altText="a" url="logo-3.png" size={52} />
      </div>
    </S.Wrapper>
  );
};

export default ProfessionalPage;
