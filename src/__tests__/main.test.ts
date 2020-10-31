import { Variable, Square, Exp } from '../main';

test('Variable class', () => {
	const x = new Variable(1);

	expect(x.data).toBe(1);
});

describe('Concreate function class', () => {
	test('Square function', () => {
		const A = new Square();
		const x = new Variable(2);

		const y = A.__call(x);
		expect(y.data).toBe(4);
	});

	test('exp function', () => {
		const B = new Exp();
		const z = new Variable(2);

		const w = B.__call(z);
		expect(w.data).toBe(Math.exp(2));
	});
});
