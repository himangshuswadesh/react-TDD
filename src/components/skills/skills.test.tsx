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
});
