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

export class Square extends Function {
	public forward(x: number): number {
		return x ** 2;
	}
}

export class Exp extends Function {
	public forward(x: number): number {
		return Math.exp(x);
	}
}
