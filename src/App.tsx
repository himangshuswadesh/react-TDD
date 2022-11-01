import './App.css';
import Skills from './components/skills';

const skills = ['HTML', 'CSS', 'JS'];
function App() {
	return (
		<div className='App'>
			<Skills skills={skills} />
		</div>
	);
}

export default App;
