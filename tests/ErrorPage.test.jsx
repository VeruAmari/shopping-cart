import { render, screen } from '@testing-library/react';
import ErrorPage from '../src/ErrorPage';

import { MemoryRouter } from 'react-router-dom';
describe('ErrorPage', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <ErrorPage>Error</ErrorPage>
      </MemoryRouter>,
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    render(
      <MemoryRouter>
        <ErrorPage>Error</ErrorPage>
      </MemoryRouter>,
    );
    expect(screen.getByText('Error')).toMatchSnapshot();
  });
});
