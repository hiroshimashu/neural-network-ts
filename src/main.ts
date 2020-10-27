class Variable {
	// TODO: add type to data
	public data: Number;
	constructor(data: Number) {
		this.data = data;
	}
}

abstract class Function {
	__call__(input: Variable): Variable {
		const x = input.data;
		const y = this.forward(x);
		const output = new Variable(y);
		return output;
	}

	abstract forward(x: Number): Number;
}

export default Variable;
