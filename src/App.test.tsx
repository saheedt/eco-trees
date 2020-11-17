import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const spinningLogo = screen.getByAltText(/spinning loader indicator/i);
  expect(spinningLogo).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByAltText(/spinning loader indicator/i));
});
