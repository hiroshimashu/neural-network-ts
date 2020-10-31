export class Variable {
	// TODO: add type to data
	public data: number;
	constructor(data: number) {
		this.data = data;
	}
}

abstract class Function {
	__call(input: Variable): Variable {
		const x = input.data;
		const y = this.forward(x);
		const output = new Variable(y);
		return output;
	}

	abstract forward(x: number): number;
}

class Square extends Function {
	public forward(x: number): number {
		return x ** 2;
	}
}

export function square(x: Variable): Variable {
	const f = new Square();
	return f.__call(x);
}
class Exp extends Function {
	public forward(x: number): number {
		return Math.exp(x);
	}
}

export function exp(x: Variable): Variable {
	const f = new Exp();
	return f.__call(x);
}
