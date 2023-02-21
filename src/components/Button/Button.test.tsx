import { render, fireEvent } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  const onClick = jest.fn();

  it('should render the button', () => {
    const { getByRole } = render(
      <Button action={onClick} text="Botão teste" />
    );
    const renderedButton = getByRole('button', { name: /Botão teste/i });
    expect(renderedButton).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(
      <Button action={onClick} text="Botão teste" />
    );

    expect(container.firstChild).toHaveStyle({ 'background-color': '#fff' });
  });

  it('should execute an action when clicked', () => {
    const { getByText } = render(<Button action={onClick} text="Clique" />);
    const button = getByText('Clique');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
