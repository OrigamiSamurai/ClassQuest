var XpView = Backbone.Epoxy.View.extend({
  tagname: 'li',

  initialize: function(options){
  },

  bindings: {
    "input.xpAmount":"value:amount"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save"
  },

  render: function(){
    this.$el.html(
    	"ID: "+ (this.attr.id ? this.attr.id : "") +
      "<br>Amount: <input type=\"text\" class=\"xpAmount\" value=\""+this.attr.amount+"\">"+
      "<br>Type ID: "+this.attr.typeId+
      "<br>Encounter ID: "+(this.attr.encounter ? this.attr.encounter.id : "")+
    	"<br>Created Date: "+formatDate(this.attr.createdDate)+
      "<br>Last Updated: "+formatDate(this.attr.updatedDate)+
    	"<br><input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
      "<br><input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"
    );

    if (!this.model.hasOwnProperty("id")) {
      this.$el.addClass("unsaved");
    }
    else {
      this.$el.removeClass("unsaved");
    }

    return this;
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

	save: function() {
    var self = this;
    this.model.save({}, {
	    success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }
});