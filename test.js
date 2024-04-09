import test from 'ava';
import stableFunction from 'stable-function';
import randomObjectKey from './index.js';

const fixture = {
	a: true,
	b: true,
	c: true,
	d: true,
	e: true,
};

test('main', t => {
	t.false(stableFunction(() => randomObjectKey(fixture)));

	for (let index = 0; index < 1000; index++) {
		t.is(typeof randomObjectKey(fixture), 'string');
	}
});
