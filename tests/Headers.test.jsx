/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import Heading from '../src/components/sub/Headers';

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

  it('correctly sets margins', () => {
    render(
      <>
        <Heading margin="2">Heading with a margin of 2</Heading>
        <Heading margin="0">Heading with a margin of 0</Heading>
        <Heading margin=".2">Heading with a margin of 0.2</Heading>
        <Heading>Heading with a default margin</Heading>
        <Heading margin="a">Heading margin ignores a string value</Heading>
        <Heading margin={null}>Heading margin ignores a null value</Heading>
      </>,
    );
    expect(screen.getByText('Heading with a margin of 2').style.margin).toMatch(
      '2rem',
    );
    expect(screen.getByText('Heading with a margin of 0').style.margin).toMatch(
      '0',
    );
    expect(
      screen.getByText('Heading with a margin of 0.2').style.margin,
    ).toMatch('.2rem');

    expect(
      screen.getByText('Heading with a default margin').style.margin,
    ).toMatch('.5rem');
    expect(
      screen.getByText('Heading margin ignores a string value').style.margin,
    ).toMatch('.5rem');
    expect(
      screen.getByText('Heading margin ignores a null value').style.margin,
    ).toMatch('.5rem');
  });
});
