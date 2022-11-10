import { useState } from 'react';

type UseCounterProps = {
	initialCount?: number;
};

const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
	const [count, setCount] = useState(initialCount);
	// increment count handler
	const incrementCount = () => {
		setCount(prev => prev + 1);
	};
	// decrement count handler
	const decrementCount = () => {
		setCount(prev => prev - 1);
	};
	return { count, incrementCount, decrementCount };
};
export default useCounter;
