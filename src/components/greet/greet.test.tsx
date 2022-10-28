import { render, screen } from '@testing-library/react';
import Greet from './greet.component';

test('Greet should render correctly', () => {
	render(<Greet />);
	const textElement = screen.getByText(/hello/i);
	expect(textElement).toBeInTheDocument();
});
