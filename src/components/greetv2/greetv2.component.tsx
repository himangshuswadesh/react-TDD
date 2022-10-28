type GreetV2Props = {
	name?: string;
};
const GreetV2 = ({ name }: GreetV2Props) => {
	return <div>Hello {name ? name : 'Guest'}</div>;
};
export default GreetV2;
