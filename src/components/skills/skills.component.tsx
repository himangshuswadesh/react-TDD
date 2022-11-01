import { useState } from 'react';
import { SkillsProps } from './skills.types';
const Skills = ({ skills }: SkillsProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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
