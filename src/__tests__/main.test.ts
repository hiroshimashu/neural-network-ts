import Variable from '../main';

test('Variable class', () => {
	const x = new Variable(1);

	expect(x.data).toBe(1);
});
