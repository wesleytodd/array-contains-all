var arrayContainsAll = require('../');
var assert = require('assert');

describe('arrayContainsAll', function() {
	var a = [1, 2, 3];
	var b = [1, 2];
	var c = [1];

	it('should retrun true if one array caontains all the entries of the other', function() {
		assert(arrayContainsAll(a, a));
		assert(arrayContainsAll(a, b));
		assert(arrayContainsAll(a, c));
	});

	it('should retrun false if one array does not caontain all the entries of the other', function() {
		assert(!arrayContainsAll(b, a));
		assert(!arrayContainsAll(c, a));
	});
});
