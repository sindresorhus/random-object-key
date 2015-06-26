'use strict';
var test = require('ava');
var stableFn = require('stable-fn');
var fn = require('./');

var fixture = {
	a: true,
	b: true,
	c: true,
	d: true,
	e: true
};

test(function (t) {
	t.assert(!stableFn(function () {
		return fn(fixture);
	}));

	for (var i = 0; i < 1000; i++) {
		t.assert(typeof fn(fixture) === 'string');
	}

	t.end();
});
