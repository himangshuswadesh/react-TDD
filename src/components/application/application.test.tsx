/**
 * Application should render all the form elements
 */

import { render, screen } from '@testing-library/react';
import Application from './application.component';

describe('Application', () => {
	test('should render all the form elements', () => {
		render(<Application />);

		const pageHeading = screen.getByRole('heading', {
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole('heading', {
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement = screen.getByRole('textbox', {
			name: 'Full name',
		});
		expect(nameElement).toBeInTheDocument();

		const bioElement = screen.getByRole('textbox', {
			name: 'Bio',
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole('combobox');
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole('checkbox');
		expect(termsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole('checkbox');
		expect(submitButtonElement).toBeInTheDocument();
	});
});
