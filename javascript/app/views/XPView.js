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

  bindings: {
    "input.xp-amount":"value:amount"
  },

  events: {
  	"click .delete-button": "delete",
  	"click .save-button": "save"
  },

  render: function(){
    $(this.el).html(
    	"ID: "+this.attr.id+" Amount: <input type=\"text\" class=\"xp-amount\" value=\""+this.attr.amount+"\"> Type ID: "+this.attr.typeId+" Encounter ID: "+this.attr.encounterId+
    	" Created Date: "+this.attr.created+" Last Updated: "+this.attr.updated+
    	"<input type=\"button\" value=\"delete\" class=\"delete-button\" />"+
    	"<input type=\"button\" value=\"save\" class=\"save-button\" />"
    );
    if (!this.model.hasOwnProperty("id")) {
      $(this.el).addClass("unsaved");
    }
    else {
      $(this.el).removeClass("unsaved");
    }
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

	save: function() {
    var self = this;
    console.log("amount", this.model.attributes.amount);
    this.model.save({}, {
	    success: function (model, response, options) {
          console.log("The model has been saved to the server");
          model.set({updated:response.updated});
          self.render();
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }
});

//todo: investigate extra fields on models