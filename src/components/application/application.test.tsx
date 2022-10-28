/**
 * Application should render all the form elements
 */

import { render, screen } from '@testing-library/react';
import Application from './application.component';

describe('Application', () => {
	test('should render all the form elements', () => {
		render(<Application />);

		const nameElement = screen.getByRole('textbox');
		expect(nameElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole('combobox');
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole('checkbox');
		expect(termsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole('checkbox');
		expect(submitButtonElement).toBeInTheDocument();
	});
});
