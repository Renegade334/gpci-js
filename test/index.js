const assert = require('node:assert/strict');
const test = require('node:test');

const GPCI = require('../index.js');

test('Empty string', context => assert.equal(
	GPCI(''),
	'EEACC9DA0D4E9E5EEFEF55C890489095090DD8AF'
));

test('The quick brown fox...', context => assert.equal(
	GPCI('The quick brown fox jumps over the lazy dog'),
	'C9E4D48FFC888DDAE49E84EDC9EDD9EE48EE9C4E'
));

test('Single leading 0', context => assert.equal(
	GPCI('5298437790912982'),
	'4089CCA58DD95F8549C509DC0CDDC4EEACA49D8'
));

test('Multiple leading 0s', context => assert.equal(
	GPCI('4951039661228611'),
	'4E44E4EDCC884D99DCEDADFDE9449D4ADCED'
));
