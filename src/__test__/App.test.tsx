import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import WelcomePage from '../pages/WelcomePage';

/* Test to test the tests. To be modified after adding any content in App */
describe('App', () => {
  it('Renders GraphQL', () => {
    render(<WelcomePage />);
    expect(screen.getByText('This is Welcome Page')).toBeInTheDocument();
  });
});
