import { render, screen } from '../../test.utils';
import MuiMode from './mui-mode.component';

describe('MuiMode', () => {
	test('should render correctly', () => {
		render(<MuiMode />);
		const headingElement = screen.getByRole('heading');
		expect(headingElement).toHaveTextContent(/dark mode/i);
	});
});
