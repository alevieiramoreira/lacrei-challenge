import { screen, render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render the footer', () => {
    const { getByRole } = render(<Footer currentPage="main" />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the two nav box in footer', () => {
    render(<Footer currentPage="main" />);
    const renderedNav = screen.getAllByRole('navigation');
    expect(renderedNav).toHaveLength(2);
  });
});
