import { render, screen } from '@testing-library/react';

import Navbar from '../src/components/main/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  it('renders', () => {
    render(
      // MemoryRouter wrapping Navbar is used to overcome a testing issue related to Link elements not being inside a react-router.
      <MemoryRouter>
        <Navbar/>
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
