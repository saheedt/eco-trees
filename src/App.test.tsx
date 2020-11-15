import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const spinningLogo = screen.getByAltText(/spinning react logo/i);
  expect(spinningLogo).toBeInTheDocument();
});
