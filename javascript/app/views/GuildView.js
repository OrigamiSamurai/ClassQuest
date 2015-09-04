CQ.Views.GuildView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Guild,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.name":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save"
  },

  render: function() {
    this.$el.html(
      	"Name: <input type=\"text\" class=\"name\">"+
      	"<input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
   		"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"
    );
    this.applyBindings();

    return this;
  },

  delete: function() {
  	this.model.destroy();
  	this.remove();
  },

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
          //model.set({updatedDate:response.updatedDate});
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});