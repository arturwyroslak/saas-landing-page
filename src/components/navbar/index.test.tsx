import { render, screen } from '@testing-library/react';
import { Navbar } from './index';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByText('SaaS Landing')).toBeInTheDocument();
  });
});