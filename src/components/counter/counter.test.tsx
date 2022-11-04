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
		const setAmountButton = screen.getByRole('button', {
			name: 'Set amount',
		});
		expect(setAmountButton).toBeInTheDocument();
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
	test('counter should render 10 after clicking the set button', async () => {
		user.setup();
		render(<Counter />);
		const amountInput = screen.getByRole('spinbutton');
		await user.type(amountInput, '10');
		expect(amountInput).toHaveValue(10);
		const setAmountButton = screen.getByRole('button', {
			name: 'Set amount',
		});
		await user.click(setAmountButton);
		const counterElement = screen.getByRole('heading', {
			level: 1,
		});
		expect(counterElement).toHaveTextContent('10');
	});
	test('should focus the elements in right order', async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole('button', {
			name: 'Increment',
		});
		const amountInput = screen.getByRole('spinbutton');
		const setAmountButton = screen.getByRole('button', {
			name: 'Set amount',
		});
		await user.tab();
		expect(incrementButton).toHaveFocus();
		await user.tab();
		expect(amountInput).toHaveFocus();
		await user.tab();
		expect(setAmountButton).toHaveFocus();
	});
});
