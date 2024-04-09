import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// import userEvent from "@testing-library/user-event";

import { NavElement } from '../src/components/sub/Containers';

describe('NavElement', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <NavElement>Cart</NavElement>
      </MemoryRouter>,
    );

    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
