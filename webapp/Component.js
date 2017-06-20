jQuery.sap.declare("ztest.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ztest.Component", {
	metadata: {
		"manifest": "json"
	}
});