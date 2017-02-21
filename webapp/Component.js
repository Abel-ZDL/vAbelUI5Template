sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"v/abel/ui5/template/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("v.abel.ui5.template.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 * The Component.js file holds the app setup. The init function of the component is automatically started by SAPUI5 when the component is instantiated.
		 * Your component extends UIComponent. If you are overriding the init function of your component, 
		 * you have to make sure that you call the init function of UIComponent and initialize the router afterwards.
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			
			
			/* destinations in the neo-app.json
			//var oModel = new sap.ui.model.json.JSONModel("/destinations/ems_backend_service");
			
			// var sData = jQuery.ajax({
			// 	type: "GET",
			// 	contentType: "text/html;charset=UTF-8",
			// 	url: "/destinations/ems_backend_service",
			// 	async: false,
			// 	success: function(data, textStatus, jqXHR){
			// 	}
				
			// });
			*/
		}
	});

});