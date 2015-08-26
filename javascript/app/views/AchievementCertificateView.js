var AchievementCertificateView = Backbone.Epoxy.View.extend({
	model: AchievementCertificate,

  tagname: "li",

	initialize: function(options){

  	_.bindAll(this, 'render');
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },

  computeds: {
    firstName: {
      deps: ['adventurer'],
      get: function (adventurer) {
        return adventurer.attributes.firstName;
      }
    },
    lastName: {
      deps: ['adventurer'],
      get: function (adventurer) {
        return adventurer.attributes.lastName;
      }
    }
  },

  bindings: {
    "span.firstName":"text:firstName",
    "span.lastName":"text:lastName"
  },

  events: {
  	"click .removeButton": "removeCertificate"
  },

  render: function() {
    this.$el.html(
      "<span class=\"firstName\"></span> <span class=\"lastName\"></span>"+
   		"<input type=\"button\" value=\"Delete\" class=\"removeButton\" />"
    );
    this.applyBindings();

    return this;
  },

  removeCertificate: function() {
    this.model.destroy();
    this.remove();
  },

	save: function() {
    this.model.save({}, {
	    success: function (model, response, options) {
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});