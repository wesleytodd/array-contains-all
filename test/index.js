var arrayContainsAll = require('../');
var assert = require('assert');

describe('arrayContainsAll', function() {
	var a = [1, 2, 3];
	var b = [1, 2];
	var c = [1];
	var d = [];

	it('should retrun true if one array caontains all the entries of the other', function() {
		assert(arrayContainsAll(a, a));
		assert(arrayContainsAll(a, b));
		assert(arrayContainsAll(a, c));
		assert(arrayContainsAll(a, d));
	});

	it('should retrun false if one array does not caontain all the entries of the other', function() {
		assert(!arrayContainsAll(b, a));
		assert(!arrayContainsAll(c, a));
		assert(!arrayContainsAll(d, a));
	});
});
