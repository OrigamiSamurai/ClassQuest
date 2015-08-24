var QuestView = Backbone.Epoxy.View.extend({
	model: Quest,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render', 'renderId');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);
    this.model.bind('change:id', this.renderId);

    this.attr = this.model.attributes;
  },

  bindings: {
    "input.period":"value:integer(period)",
    "input.name":"value:name"
  },

  events: {
  	"click .deleteButton": "delete",
  	"click .saveButton": "save"
  },

  render: function() {
    this.$el.html(
      "Period: <input type=\"text\" class=\"period\"> "+
      "Name: <input type=\"text\" class=\"name\">"+
      "<input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
    	"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"
    );
    this.applyBindings();

    if (!this.model.hasOwnProperty("id")) {
      this.$el.addClass("unsaved");
    }
    else {
      this.$el.removeClass("unsaved");
    }

    return this;
  },

  renderId: function() {
    this.$el.find('span.xpId').html(this.model.attributes.id);
    this.$el.removeClass('unsaved');
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