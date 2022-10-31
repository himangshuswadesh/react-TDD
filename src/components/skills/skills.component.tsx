import { SkillsProps } from './skills.types';
const Skills = ({ skills }: SkillsProps) => {
	return (
		<>
			<ul>
				{skills.map(skill => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</>
	);
};
export default Skills;
