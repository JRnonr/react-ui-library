import '@testing-library/jest-dom';
import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { version } from '../../src';

function Hello() {
  return <div>Hello {version}</div>;
}

describe('smoke', () => {
  it('renders without crash', () => {
    const { getByText } = render(<Hello />);
    expect(getByText(/Hello/)).toBeTruthy();
  });
}); 