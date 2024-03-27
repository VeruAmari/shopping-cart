import { render, screen } from '@testing-library/react';

import { Heading } from '../src/components/sub/Headers';

describe('Heading', () => {
  it('renders', () => {
    render(<Heading level="1">Level 1 Heading</Heading>);
    expect(screen.getByText('Level 1 Heading').textContent).toMatch(/level/i);
  });
  it('correctly handles heading level', () => {
    render(
      <div data-testid="parent">
        <Heading level="1"></Heading>
      </div>,
    );
    expect(screen.getByTestId('parent')).toContainHTML('<h1></h1>');
  });
});
