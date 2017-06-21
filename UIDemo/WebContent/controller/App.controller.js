sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
         //alert("Hello World");
    	  var oBundle = this.getView().getModel("i18n").getResourceBundle();
    	  var sRecipient = this.getView().getModel().getProperty("/recipient/name");
    	  var sMsg = oBundle.getText("helloMsg",[sRecipient,"array1","array2"]);
//    	  MessageToast.show(this.getView().getModel().getProperty("/recipient/name"));
    	  MessageToast.show(sMsg);
      },
      onShowNo : function() {
    	 alert("Say No");
      },

   });
});