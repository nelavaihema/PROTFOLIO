import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio overview sections', () => {
  render(<App />);

  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByText(/mern stack projects/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /a concise view of my experience and skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /credentials that support my practical experience/i })).toBeInTheDocument();
  expect(screen.getByText(/create something meaningful together/i)).toBeInTheDocument();
});
