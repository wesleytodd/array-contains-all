module.exports = function arrayContainsAll (a, b) {
	return !!a.length && b.map(function (v) {
		return a.indexOf(v) !== -1;
	}).reduce(function (v, v2) {
		return v && v2;
	}, true);
};
