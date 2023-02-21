import * as S from './styles';

export interface ButtonProps {
  action: () => void;
  text: string;
  active?: boolean;
}

const Button = ({ action, text, active }: ButtonProps) => {
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
      active={active}
    >
      {text}
    </S.ButtonContainer>
  );
};

export default Button;
