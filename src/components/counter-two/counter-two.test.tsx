import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import CounterTwo from './counter-two.component';
describe('CounterTwo', () => {
	test('should render correctly', () => {
		render(<CounterTwo count={0} />);
		const countElement = screen.getByRole('heading', {
			level: 3,
		});
		expect(countElement).toHaveTextContent('0');
	});
	test('should handle the handlers', async () => {
		user.setup();
		const incrementHandler = jest.fn();
		const decrementHandler = jest.fn();
		render(
			<CounterTwo
				count={0}
				incrementHandler={incrementHandler}
				decrementHandler={decrementHandler}
			/>
		);
		const incrementButton = screen.getByRole('button', {
			name: /increment/i,
		});
		const decrementButton = screen.getByRole('button', {
			name: /decrement/i,
		});
		await user.click(incrementButton);
		await user.click(decrementButton);

		expect(incrementHandler).toHaveBeenCalledTimes(1);
		expect(decrementHandler).toHaveBeenCalledTimes(1);
	});
});
