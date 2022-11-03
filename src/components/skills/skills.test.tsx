/**
 * Skills Lists should render properly
 * Skills Lists Items should render properly
 */

import { render, screen } from '@testing-library/react';
import Skills from './skills.component';

describe('Skills', () => {
	const skills = ['HTML', 'CSS', 'JS'];
	test('renders the list', () => {
		render(<Skills skills={skills} />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	});

	test('renders the list items', () => {
		render(<Skills skills={skills} />);
		const listItemsElement = screen.getAllByRole('listitem');
		expect(listItemsElement).toHaveLength(skills.length);
	});

	test('renders the Login button', () => {
		render(<Skills skills={skills} />);
		const loginButtonElement = screen.getByRole('button', {
			name: 'Login',
		});
		expect(loginButtonElement).toBeInTheDocument();
	});

	test('start Learning button is not rendered', () => {
		render(<Skills skills={skills} />);
		const loginButtonElement = screen.queryByRole('button', {
			name: 'Start Learning',
		});
		expect(loginButtonElement).not.toBeInTheDocument();
	});

	test('start Learning button is eventually rendered', async () => {
		render(<Skills skills={skills} />);
		const loginButtonElement = await screen.findByRole(
			'button',
			{
				name: 'Start Learning',
			},
			{
				timeout: 2000,
			}
		);
		expect(loginButtonElement).toBeInTheDocument();
	});
});
