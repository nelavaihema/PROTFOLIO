import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio overview sections', () => {
  render(<App />);

  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByText(/selected work/i)).toBeInTheDocument();
  expect(screen.getByText(/create something meaningful together/i)).toBeInTheDocument();
});
