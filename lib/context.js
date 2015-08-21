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
	var g = global || window;
	if ( g.__context__ === void 0 )
		g.__context__ = {};
	return g.__context__;
}));
