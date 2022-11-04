import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [amount, setAmount] = useState(0);
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
			<input
				type='number'
				name='amount'
				value={amount}
				onChange={e => setAmount(parseInt(e.target.value))}
			/>
			<button onClick={() => setCount(amount)}>Set amount</button>
		</>
	);
};
export default Counter;
