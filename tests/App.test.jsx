import { render, screen } from '@testing-library/react';

import App from '../src/App.jsx';

describe('App', () => {
  it('renders header', () => {
    render(<App/>);

    expect(screen.getByText("Header").textContent).toMatch(/header/i);

    // check if App components renders headline
  });
});