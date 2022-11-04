import { render, screen } from '@testing-library/react';
import Counter from './counter.component';
import user from '@testing-library/user-event';

describe('Counter', () => {
	test('should render correctly', () => {
		render(<Counter />);
		const counterElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(counterElement).toBeInTheDocument();
		const incrementButton = screen.getByRole('button', {
			name: 'Increment',
		});
		expect(incrementButton).toBeInTheDocument();
	});
	test('counter should render 0 initially', () => {
		render(<Counter />);
		const counterElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(counterElement).toHaveTextContent('0');
	});
	test('counter should render 1 after clicking increment button', async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole('button', {
			name: 'Increment',
		});
		await user.click(incrementButton);
		const counterElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(counterElement).toHaveTextContent('1');
	});
	test('counter should render 2 after clicking increment button twice', async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole('button', {
			name: 'Increment',
		});
		await user.dblClick(incrementButton);
		const counterElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(counterElement).toHaveTextContent('2');
	});
});
