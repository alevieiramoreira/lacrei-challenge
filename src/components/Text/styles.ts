import styled from 'styled-components';

interface TextProps {
  readonly as: 'h1' | 'span' | 'p';
}

const h1StyledText = {
  'font-weight': '600',
  'font-size': '4.8rem'
};

const pStyledText = {
  'font-weight': '400',
  'font-size': '2.4rem',
  color: '#515151'
};

const spanStyledText = {
  'font-weight': '400',
  'font-size': '1.4rem',
  color: '#515151'
};

const handleStyleProps = ({ as }: TextProps) => {
  switch (as) {
    case 'h1':
      return h1StyledText;
    case 'p':
      return pStyledText;
    case 'span':
      return spanStyledText;
    default:
      break;
  }
};

export const MainText = styled((props) => props.as)<TextProps>`
  ${handleStyleProps}
`;
