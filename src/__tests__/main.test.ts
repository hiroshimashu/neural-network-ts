import { Variable, square, exp } from '../main';

test('Variable class', () => {
	const x = new Variable(1);

	expect(x.data).toBe(1);
});

describe('Concreate function class', () => {
	test('Square function', () => {
		const x = new Variable(2);

		const y = square(x);
		expect(y.data).toBe(4);
	});

	test('exp function', () => {
		const z = new Variable(2);

		const w = exp(z);
		expect(w.data).toBe(Math.exp(2));
	});

	test('functions can be nested', () => {
		const x = new Variable(2);
		const z = exp(square(x));

		expect(z.data).toBe(Math.exp(4));
	});
});
