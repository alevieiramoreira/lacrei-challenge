import * as S from './styles';

interface ButtonProps {
  action: () => void;
  text: string;
}

const Button = ({ action, text }: ButtonProps) => {
  const handleButtonKeyPress = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <S.ButtonContainer
      onClick={action}
      id={text}
      aria-label={text}
      onKeyUp={handleButtonKeyPress}
    >
      {text}
    </S.ButtonContainer>
  );
};

export default Button;
