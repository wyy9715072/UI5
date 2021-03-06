sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.wt.Component", {
	   metadata: {manifest: "json"},
	   
	   
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
        
       	  var oData = {
       			recipient : { name: "World"}  
       	  };
       	  var oModel = new JSONModel(oData);
       	  this.setModel(oModel);
       	  
//       	  var i18nModel = new ResourceModel({bundleName:"sap.ui.demo.wt.i18n.i18n"});
////       	  var i18nModel = new ResourceModel({bundleName: "sap.ui.demo.wt.i18n.i18n"});
//
//       	  this.setModel(i18nModel, "i18n");
//       
       	  

//*******************************       	  
	}
   });
});
