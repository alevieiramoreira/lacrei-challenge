import { render } from '@testing-library/react';
import Link from '.';

describe('Link', () => {
  it('should render the link default type with the correct href and text', () => {
    const { getByRole } = render(
      <Link type="link" text="Profissional" href="/profissional" />
    );
    const link = getByRole('link', { name: 'Profissional' });
    expect(link).toHaveAttribute('href', '/profissional');
    expect(link).toHaveTextContent('Profissional');
  });

  it('should render the image type with the correct logo inside', () => {
    const { getByRole } = render(
      <Link
        type="image"
        imgProps={{ altText: 'Logo', size: 3.2, url: 'logo-2.png' }}
        href="/profissional"
      />
    );
    const image = getByRole('presentation');
    expect(image).toBeInTheDocument();
  });

  it('should render the color and font size correctly', () => {
    const { container } = render(
      <Link type="link" text="Profissional" href="/profissional" />
    );

    expect(container.firstChild).toHaveStyle({
      color: '#1f1f1f',
      'font-size': '1.6rem'
    });
  });
});
