import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
		</>
	);
};
export default Counter;
