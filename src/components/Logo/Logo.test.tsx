import { render } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render an image with the correct source and alt text', () => {
    const src = 'https://www.portallacrei.com.br/';
    const alt = 'Exemplo Logo';
    const { getByAltText } = render(<Logo url={src} altText={alt} size={32} />);
    const logo = getByAltText(alt);
    expect(logo).toHaveAttribute('src', src);
  });
});
