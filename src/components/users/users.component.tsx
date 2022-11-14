import { useEffect, useState } from 'react';

export interface UsersType {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}
export interface Geo {
	lat: string;
	lng: string;
}
export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

const Users = () => {
	const [usersLists, setUsersLists] = useState<Array<UsersType>>([]);
	const [error, setError] = useState('');
	const fetchUsersLists = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			if (!response.ok) {
				throw new Error('something went wrong');
			}
			const responseData = await response.json();
			setUsersLists(responseData);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
		}
	};
	useEffect(() => {
		fetchUsersLists();
	}, []);
	const listItems = usersLists.map(item => <li key={item.id}>{item.name}</li>);
	// error
	if (!!error) return <h2>{error}</h2>;

	return (
		<>
			<h2>Users</h2>
			<ul>{listItems}</ul>
		</>
	);
};
export default Users;
