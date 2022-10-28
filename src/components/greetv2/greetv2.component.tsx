type GreetV2Props = {
	name?: string;
};
const GreetV2 = ({ name }: GreetV2Props) => {
	return <div>Hello {name}</div>;
};
export default GreetV2;
