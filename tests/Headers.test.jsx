import { render, screen } from '@testing-library/react';

import { Heading } from '../src/components/sub/Headers';

describe('Heading', () => {
  it('renders', () => {
    render(<Heading level="1">Level 1 Heading</Heading>);
    expect(screen.getByText('Level 1 Heading').textContent).toMatch(/level/i);
  });
  it('correctly handles heading levels', () => {
    render(
      <>
        <div data-testid="parent">
          <Heading level="1">Heading</Heading>
        </div>
        <div data-testid="parent-2">
          <Heading level="2">Heading</Heading>
        </div>
        <div data-testid="parent-3">
          <Heading level="6">Heading</Heading>
        </div>
      </>,
    );
    expect(screen.getByTestId('parent').firstChild).toContainHTML('</h1>');
    expect(screen.getByTestId('parent-2').firstChild).toContainHTML('</h2>');
    expect(screen.getByTestId('parent-3').firstChild).toContainHTML('</h6>');
  });
});
