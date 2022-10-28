const Application = () => {
	return (
		<div>
			<form>
				<div>
					<label htmlFor='fullname'>Full name</label>
					<input
						type='text'
						id='fullname'
						name='fullname'
						placeholder='Ex: John Doe'
					/>
				</div>
				<div>
					<label htmlFor='joblocation'>Job location</label>
					<select name='joblocation' id='joblocation'>
						<option value='in'>India</option>
						<option value='au'>Australia</option>
					</select>
				</div>
				<div>
					<label htmlFor='terms'>Terms and Condition</label>
					<input type='checkbox' id='terms' name='terms' />
				</div>
				<button type='submit' id='submitbutton'>
					Submit
				</button>
			</form>
		</div>
	);
};
export default Application;
