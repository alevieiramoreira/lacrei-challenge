import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('should render the header text', () => {
    const { getByRole } = render(<Header currentPage="main" />);
    const renderedHeader = getByRole('banner');
    expect(renderedHeader).toBeInTheDocument();
  });

  it('should render the nav box', () => {
    const { getByRole } = render(<Header currentPage="main" />);
    const renderedNav = getByRole('navigation');
    expect(renderedNav).toBeInTheDocument();
  });
});
