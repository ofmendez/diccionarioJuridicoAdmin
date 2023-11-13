class Meaning {
	constructor () {
		this.inputs = { subject: 'MATERIA' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (event) {
		const name = event.target.name;
		const value = event.target.value;
		Object.assign(this.inputs, { [name]: value });
	}
}

export default Meaning;
