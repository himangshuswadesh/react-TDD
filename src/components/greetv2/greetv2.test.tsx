/**
 * GreetV2 should render the text hello correctly
 * If a name is passed into GreetV2 component it should return hello followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greetv2 from './greetv2.component';

describe('GreetV2', () => {
	it('should render correctly', () => {
		render(<Greetv2 />);
		const textElememt = screen.getByText(/hello/i);
		expect(textElememt).toBeInTheDocument();
	});

	it('should render correctly followed by the name', () => {
		render(<Greetv2 name='John Doe' />);
		const textElememt = screen.getByText(/hello\sjohn doe/i);
		expect(textElememt).toBeInTheDocument();
	});
});
