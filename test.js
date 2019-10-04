import test from 'ava';
import stableFn from 'stable-fn';
import randomObjectKey from '.';

const fixture = {
	a: true,
	b: true,
	c: true,
	d: true,
	e: true
};

test('main', t => {
	t.false(stableFn(() => randomObjectKey(fixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof randomObjectKey(fixture), 'string');
	}
});
