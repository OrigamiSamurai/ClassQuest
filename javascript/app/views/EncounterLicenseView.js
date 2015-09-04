CQ.Views.EncounterLicenseView = Backbone.Epoxy.View.extend({
	model: CQ.Models.EncounterLicense,

	tagname: 'li',

	initialize: function(options){
	_.bindAll(this, 'render');
    this.model.bind('reset', this.render);

    this.attr = this.model.attributes;
  },
/*
  bindings: {
    "input.Amount":"value:integer(amount)"
  },
*/
  events: {
  	"click .removeButton": "removeEncounterLicense",
  },

  render: function() {
    
    console.log('rendering encounter license',this.model);
    
    this.$el.html(
      "For encounter: "+this.attr.encounter.attributes.name+
  	"<input type=\"button\" value=\"Remove\" class=\"removeButton\" />"
    );
    this.applyBindings();

    return this;
  },

  removeEncounterLicense: function() {
  	this.model.destroy();
  	this.remove();
  },
})