import { render } from '@testing-library/react';
import Header from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as Record<string, any>),
  useNavigate: () => mockedUsedNavigate
}));

describe('Header', () => {
  it('should render the header text', () => {
    const { getByRole } = render(<Header />);
    const renderedHeader = getByRole('banner');
    expect(renderedHeader).toBeInTheDocument();
  });

  it('should render the nav box', () => {
    const { getByRole } = render(<Header />);
    const renderedNav = getByRole('navigation');
    expect(renderedNav).toBeInTheDocument();
  });
});
