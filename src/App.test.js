import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CICD text', () => {
  render(<App />);
  const linkElement = screen.getByText(/CICD Testing. Bui Trong Tri/i);
  expect(linkElement).toBeInTheDocument();
});