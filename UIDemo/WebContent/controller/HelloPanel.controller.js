sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.HelloPanel", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
      },
      onOpenDialog : function(){
    	  var oView = this.getView();
    	  var oDialog = oView.byId("helloDialog");
    	  if(!oDialog){
    		  oDialog = sap.ui.xmlfragment(oView.getId(),"sap.ui.demo.wt.view.HelloDialog");
    		  oView.addDependent(oDialog);
    	  }
    	  var oButton = new sap.m.Button("BeginButton",{text:"BGButton" , press: this.onCloseDialog});
//    	  oButton.attachPress("onCloseDialog");
    	  oDialog.setBeginButton(oButton);
    	  oDialog.open();
      },
      onCloseDialog : function(){
    	  alert("close");
//    	  this.getView().byId("helloDialog").destroyBeginButton();
//    	  this.getParent().getView().byId("helloDialog").close();
    	  this.getParent().close();
      },
      insertInvoice: function(){

    	  var oEntry = {};
    	  oEntry.Invoiceno = '00000002';
    	  oEntry.Productname = 'Shirt';
    	  oEntry.Quantity = "15";
    	  oEntry.Extendedprice = "36";
    	  oEntry.Shippername = 'DHL';
    	  oEntry.Status = 'B';
    	  OData.request({
	          requestUri : "https://ldcisd4.wdf.sap.corp:44302/sap/opu/odata/SAP/Z_I068015_UI5_SRV/InvoiceSet" , 
	          method : "GET",
	          headers : {
	                                  "X-Requested-With" : "XMLHttpRequest",
	                                  "Content-Type" : "application/atom+xml",
	                                  "DataServiceVersion" : "2.0",
	                                  "X-CSRF-Token" : "Fetch"
	                                  }
	                      },
	                      function(data, response) {
	                                  var header_xcsrf_token = response.headers['x-csrf-token'];
	                                  var oHeaders = {
	                                              "x-csrf-token" : header_xcsrf_token,
	                                              'Accept' : 'application/json',
	                      };
	          OData.request({
	                                  requestUri : "https://ldcisd4.wdf.sap.corp:44302/sap/opu/odata/SAP/Z_I068015_UI5_SRV/InvoiceSet",
	                                  method : "POST",
	                                  headers : oHeaders,
	                                  data:oEntry
	                      },
	                                  function(data,request) {
	                                  alert("Employee Created Successfully");        
	                                  location.reload(true);
	                      },          function(err) {
	                                  alert("Employee Creation Failed");
	                      });
	          }, function(err) {
	                                  var request = err.request;
	                                  var response = err.response;
	                                  alert("Error in Get — Request " + request + " Response " + response);
	                      });    
    	  
    	  
      }
   });
});