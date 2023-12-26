import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Label from '../components/label/Label';

test('Label renders correctly', () => {
  render(<Label htmlFor="test">Test Label</Label>);
  const labelElement = screen.getByText('Test Label');
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveAttribute('for', 'test');
});
