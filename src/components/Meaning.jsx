class Meaning {
	constructor () {
		const date = new Date();
		this.inputs = { subject: 'MATERIA', year: date.getFullYear() };
		this.handleChange = this.handleChange.bind(this);
	}

	createFromData (data) {
		this.inputs = data;
		this.handleChange = this.handleChange.bind(this);
		return this;
	}

	handleChange (event) {
		const name = event.target.name;
		const value = name === 'year' ? event.target.valueAsNumber : event.target.value;
		Object.assign(this.inputs, { [name]: value });
	}
}

export default Meaning;
