import './App.css';
import Counter from './components/counter';
import Skills from './components/skills';

const skills = ['HTML', 'CSS', 'JS'];
function App() {
	return (
		<div className='App'>
			{/* <Skills skills={skills} /> */}
			<Counter />
		</div>
	);
}

export default App;
