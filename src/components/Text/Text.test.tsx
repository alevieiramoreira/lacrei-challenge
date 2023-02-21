import { render } from '@testing-library/react';
import Text from '.';

describe('Text', () => {
  it('should render the correct text', () => {
    const text = 'Texto Exemplo';
    const { getByText } = render(<Text as="p" value={text} />);
    const renderedText = getByText('Texto Exemplo');
    expect(renderedText).toBeInTheDocument();
  });

  it('should render the <p> tag text', () => {
    const text = 'Exemplo Parágrafo';
    const { getByText } = render(<Text as="p" value={text} />);
    const renderedText = getByText('Exemplo Parágrafo');
    expect(renderedText.tagName).toBe('P');
  });

  it('should render the <h1> tag text', () => {
    const text = 'Exemplo Título';
    const { getByText } = render(<Text as="h1" value={text} />);
    const renderedText = getByText('Exemplo Título');
    expect(renderedText.tagName).toBe('H1');
  });

  it('should render the <span> tag text', () => {
    const text = 'Exemplo Texto Simples';
    const { getByText } = render(<Text as="span" value={text} />);
    const renderedText = getByText('Exemplo Texto Simples');
    expect(renderedText.tagName).toBe('SPAN');
  });
});
