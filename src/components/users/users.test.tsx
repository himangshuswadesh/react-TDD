import { render, screen } from '@testing-library/react';
import Users from './users.component';

describe('Users', () => {
	test('should render correctly', () => {
		render(<Users />);
		const usersTitleElement = screen.getByRole('heading', {
			level: 2,
			name: /users/i,
		});
		expect(usersTitleElement).toBeInTheDocument();
	});
});
