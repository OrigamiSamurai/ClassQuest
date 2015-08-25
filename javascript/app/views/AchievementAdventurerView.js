var AchievementAdventurerView = Backbone.Epoxy.View.extend({
	model: Adventurer,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render');
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },

  bindings: {
    "span.firstName":"text:firstName",
    "span.lastName":"text:lastName"
  },

  events: {
  	"click .removeButton": "remove"
  },

  render: function() {
    this.$el.html(
      "<span class=\"firstName\"></span> <span class=\"lastName\"></span>"+
      "<input type=\"button\" value=\"Save\" class=\"saveButton\" />"+
   		"<input type=\"button\" value=\"Delete\" class=\"removeButton\" />"
    );
    this.applyBindings();

    return this;
  },

  remove: function() {
    this.collection.remove(this.model);
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