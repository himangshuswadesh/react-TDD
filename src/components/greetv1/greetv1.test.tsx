/**
 * GreetV1 should render the text hello correctly
 * If a name is passed into GreetV1 component it should return hello followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greetv1 from './greetv1.component';

describe('Greetv1', () => {
	test('should render correctly', () => {
		render(<Greetv1 />);
		const textElememt = screen.getByText(/hello/i);
		expect(textElememt).toBeInTheDocument();
	});

	test('should render correctly followed by the name', () => {
		render(<Greetv1 name='John Doe' />);
		const textElememt = screen.getByText(/hello\sjohn doe/i);
		expect(textElememt).toBeInTheDocument();
	});
});
