import { render, screen } from '@testing-library/react';

import Navbar from '../src/components/main/Navbar';

describe('Navbar', () => {
  it('renders', () => {
    render(<Navbar>Header</Navbar>);

    expect(screen.getByText('Header').textContent).toMatch(/header/i);
  });
});
