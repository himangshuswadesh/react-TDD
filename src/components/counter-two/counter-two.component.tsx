type CounterTwoProps = {
	count: number;
	incrementHandler?: () => void;
	decrementHandler?: () => void;
};
const CounterTwo = (props: CounterTwoProps) => {
	return (
		<>
			<h3>{props.count}</h3>
			{props.incrementHandler && (
				<button onClick={props.incrementHandler}>Increment</button>
			)}
			{props.decrementHandler && (
				<button onClick={props.decrementHandler}>Decrement</button>
			)}
		</>
	);
};
export default CounterTwo;
