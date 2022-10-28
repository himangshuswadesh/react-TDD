/**
 * GreetV1 should render the text hello correctly
 * If a name is passed into GreetV1 component it should return hello followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greetv1 from './greetv1.component';

test('GreetV1 should render correctly', () => {
	render(<Greetv1 />);
	const textElememt = screen.getByText(/hello/i);
	expect(textElememt).toBeInTheDocument();
});

test('GreetV1 should render correctly followed by the name', () => {
	render(<Greetv1 name='John Doe' />);
	const textElememt = screen.getByText(/hello\sjohn doe/i);
	expect(textElememt).toBeInTheDocument();
});
