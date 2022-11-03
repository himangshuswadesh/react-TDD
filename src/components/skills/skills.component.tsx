import { useEffect, useState } from 'react';
import { SkillsProps } from './skills.types';
const Skills = ({ skills }: SkillsProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => setIsLoggedIn(true), 500);
	}, []);
	return (
		<>
			<ul>
				{skills.map(skill => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
			{isLoggedIn ? (
				<button>Start Learning</button>
			) : (
				<button onClick={() => setIsLoggedIn(true)}>Login</button>
			)}
		</>
	);
};
export default Skills;
