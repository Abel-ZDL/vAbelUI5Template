sap.ui.define([
	"v/abel/ui5/template/controller/BaseController"
], function(Controller) {
	"use strict";

	/*
	Lifecycle Hooks(sap.ui.core.mvc.Controller)
	SAPUI5 provides predefined lifecycle hooks for implementation. 
	You can add event handlers or other functions to the controller and the controller can fire events, 
	for which other controllers or entities can register.

	SAPUI5 provides the following lifecycle hooks:
	onInit(): Called when a view is instantiated and its controls (if available) have already been created;
	          used to modify the view before it is displayed to bind event handlers and do other one-time initialization
	onExit(): Called when the view is destroyed; used to free resources and finalize activities
    onAfterRendering(): Called when the view has been rendered and, therefore, its HTML is part of the document; 
	                    used to do post-rendering manipulations of the HTML. SAPUI5 controls get this hook after being rendered.
	onBeforeRendering(): Invoked before the controller view is re-rendered and not before the first rendering; 
	                     use onInit() for invoking the hook before the first rendering
	*/
	return Controller.extend("v.abel.ui5.template.controller.App", {

		/* =========================================================== */
		/* Lifecycle methods                                           */
		/* =========================================================== */
		/** 
		 * This method is called upon initialization of the View.
		 * @public
		 */
		onInit: function() {
			// init and document members here
			/**
			 * The status of a MyClass.
			 * @private
			 */
			this._bReady = false; // ready to handle requests
			
			
			//this.getRouter().attachRoutePatternMatched(this._onRouteMatched, this);
			//this.getRouter().getRoute("object").attachMatched(this._onRouteMatched, this);
			//this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
		},
		/** 
		 * This method is called upon desctuction of the View.
		 * @public
		 */
		onExit: function() {

		},
		/** 
		 * This method is called every time the View is rendered, before the Renderer is called and the HTML is placed in the DOM-Tree.
		 * @public
		 */
		onBeforeRendering: function() {

		},
		/** 
		 * This method is called every time the View is rendered, after the HTML is placed in the DOM-Tree.
		 * @public
		 */
		onAfterRendering: function() {

		},

		/* =========================================================== */
		/* Event handlers                                              */
		/* =========================================================== */
		/** 
		 * Handle the click event of button.
		 * 
		 * @param {sap.ui.base.Event} oEvent Event
		 */
		onClick: function(oEvent) {
			// alert(oEvent.toString());
			/*
			//The view will be re-rendered when view's properties are changed.
			//1.No re-rendered. it's button's properties changed.
			this.byId("idBtnHello").setText("Clicked!");
			//2.re-rendered.
			this.getView().setWidth("100%");
			*/
			//onExit will be triggered when the view is destroyed.
			this.getView().destroy();
		},
		
        /* =========================================================== */
		/* Internal methods                                            */
		/* =========================================================== */
        /**
		 * @function
		 * @name _onRouteMatched
		 * @description clear and add shell styles for pages and set header visibility when route matched
		 * @param {sap.ui.base.Event} oEvent - The event object
		 */
		_onRouteMatched: function(oEvent) {
		}

	});

});