import { screen, render } from '@testing-library/react';
import Footer from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, any>),
  useNavigate: () => mockedUsedNavigate
}));

describe('Footer', () => {
  it('should render the footer', () => {
    const { getByRole } = render(<Footer />);
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the two nav box in footer', () => {
    render(<Footer />);
    const renderedNav = screen.getAllByRole('navigation');
    expect(renderedNav).toHaveLength(2);
  });
});
