import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// import userEvent from "@testing-library/user-event";

import { NavElement } from '../src/components/sub/Containers';
import userEvent from '@testing-library/user-event';

describe('NavElement', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <NavElement>Cart</NavElement>
      </MemoryRouter>,
    );

    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    render(
      <MemoryRouter>
        <NavElement>Cart</NavElement>
      </MemoryRouter>,
    );
    expect(screen.getByText('Cart')).toMatchSnapshot();
  });
  it('is clickable', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NavElement to="/cart">Cart</NavElement>
      </MemoryRouter>,
    );

    await user.click(screen.getByText('Cart'));
  });
});
