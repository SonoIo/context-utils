;(function (root, factory) {

	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return factory(root);
		});
	}
	else if (typeof exports !== 'undefined') {
		module.exports = factory(root);
	}
	else {
		root.context = factory(root);
	}

}(this, function (root) {
	return {};
}));
