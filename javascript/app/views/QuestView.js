CQ.Views.QuestView = Backbone.Epoxy.View.extend({
	model: CQ.Models.Quest,

  el: "#QuestContainer",

	initialize: function(options){

  	_.bindAll(this, 'render');// onsubmits are currently used for saving lower level items
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
    
    this.render();
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
    	"<input type=\"button\" value=\"Delete\" class=\"deleteButton\" />"+
      "<br>Encounters:"+
      "<div id=\"EncounterLicenseContainer\">"+
      "</div>"+
      "<br>Guilds:"+
      "<div class=\"questGuilds\">"+
      "</div>"+
      "<br>Adventurers:"+
      "<div class=\"questAdventurers\">"+
      "</div>"
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
	    },
	    error: function (model, xhr, options) {
	        console.log("Something went wrong while saving the model");
	    }
  	});
  }

});