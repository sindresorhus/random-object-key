import test from 'ava';
import stableFn from 'stable-fn';
import randomObjKey from '.';

const fixture = {
	a: true,
	b: true,
	c: true,
	d: true,
	e: true
};

test('main', t => {
	t.false(stableFn(() => randomObjKey(fixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof randomObjKey(fixture), 'string');
	}
});
