sap.ui.define([
	"sap/ui/base/Object"
], function(Object) {
	"use strict";

	/**
	 *
	 */
	var Formatter = Object.extend("sap.mrs.ext.model.Formatter", /** @lends sap.mrs.ext.model.Formatter.prototype */ {
		constructor: function() {
			Object.apply(this, arguments);
		},

		metadata: {
			publicMethods: []
		}

	});

// 	Formatter.staticMember();
// 	Formatter.prototype.instanceMethod();

	return Formatter;
});