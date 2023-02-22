import { render } from '@testing-library/react';
import Link from '.';

describe('Link', () => {
  it('should render the link default type with the correct href and text', () => {
    const { getByRole } = render(<Link type="link" text="Profissional" />);
    const link = getByRole('link', { name: 'Profissional' });
    expect(link).toHaveTextContent('Profissional');
  });

  it('should render the image type with the correct logo inside', () => {
    const { getByRole } = render(
      <Link
        type="image"
        imgProps={{ altText: 'Logo', size: 3.2, url: 'logo-2.png' }}
      />
    );
    const image = getByRole('presentation');
    expect(image).toBeInTheDocument();
  });

  it('should render the color and font size correctly', () => {
    const { container } = render(<Link type="link" text="Profissional" />);

    expect(container.firstChild).toHaveStyle({
      color: '#1f1f1f',
      'font-size': '1.6rem'
    });
  });
});
