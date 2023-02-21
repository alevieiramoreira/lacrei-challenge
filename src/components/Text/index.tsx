import * as S from './styles';

interface TextProps {
  as: 'h1' | 'span' | 'p';
  value: string;
}

const Text = ({ value, as }: TextProps) => {
  const roles = {
    p: 'paragraph',
    h1: 'heading',
    span: 'text'
  };

  const roleName = roles[as];

  return (
    <S.MainText as={as} aria-label={value} role={roleName}>
      {value}
    </S.MainText>
  );
};

export default Text;
