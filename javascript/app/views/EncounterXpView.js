var EncounterXpView = Backbone.Epoxy.View.extend({
	model: Xp,

	tagname: 'li',

	initialize: function(options){
  	console.log("encounter xp view created with options: ",options);

  	_.bindAll(this, 'render');// onsubmits are currently used for saving lower level items
    this.model.bind('change', this.render);
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.xpAmount":"value:amount"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save"
  },

  render: function() {
    console.log("rendering...", this);
    this.$el.html(
    	"ID: "+ (this.attr.id ? this.attr.id : "") +
      "<br>Amount: <input type=\"text\" class=\"xpAmount\" value=\""+this.attr.amount+"\">"+
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
    this.model.save({}, {
	    success: function (model, response, options) {
          model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }
})