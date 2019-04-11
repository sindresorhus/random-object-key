'use strict';

module.exports = object => {
	const keys = Object.keys(object);
	return keys[Math.floor(Math.random() * keys.length)];
};
