/**
 * Application V1 should render all the form elements
 */

import { render, screen } from '@testing-library/react';
import Application from './applicationv1.component';

describe('Application V1', () => {
	test('should render all the form elements', () => {
		render(<Application />);
		const nameElement = screen.getByLabelText('Full name');
		expect(nameElement).toBeInTheDocument();

		const bioElement = screen.getByLabelText('Bio');
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByLabelText('Job location');
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByLabelText('Terms and Condition');
		expect(termsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole('button');
		expect(submitButtonElement).toBeInTheDocument();
	});
});
