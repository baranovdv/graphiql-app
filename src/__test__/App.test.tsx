import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

/* Test to test the tests. To be modified after adding any content in App */
describe('App', () => {
  it('Renders GraphQL', () => {
    render(<App />);
    expect(
      screen.getByRole('button', {
        name: /выйти/i,
      })
    ).toHaveTextContent('выйти');
  });
});
