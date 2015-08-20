var XPView = Backbone.Epoxy.View.extend({
  tagname: 'li',

  initialize: function(options){
    _.bindAll(this, 'render');
    _.bindAll(this, 'save');
    
    console.log("xpview initialization options", options);
    this.attr = options.model.attributes;

    this.render();

    // add event listener
  },

  events: {
  	"click .delete-button": "delete",
  	"click .save-button": "save"
  },

  render: function(){
    $(this.el).append(
    	"ID: "+this.attr.id+" Amount: "+this.attr.amount+" Type ID: "+this.attr.typeId+" Encounter ID: "+this.attr.encounterId+
    	" Created Date: "+this.attr.created+" Last Updated: "+this.attr.updated+
    	"<input type=\"button\" value=\"delete\" class=\"delete-button\" />"+
    	"<input type=\"button\" value=\"save\" class=\"save-button\" />"
    );
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

	save: function() {
    console.log("save fired");
    console.log(this);
    this.model.save({}, {
	    success: function (model, respose, options) {
	        console.log("The model has been saved to the server");
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }
});

//todo: investigate extra fields on models