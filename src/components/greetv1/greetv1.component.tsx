type GreetV1Props = {
	name?: string;
};
const Greetv1 = ({ name }: GreetV1Props) => {
	return <div>Hello {name}</div>;
};
export default Greetv1;
