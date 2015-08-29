var EncounterCollectionView = Backbone.Epoxy.View.extend({

	el: $('#EncounterContainer'),

	initialize: function() {
	    _.bindAll(this, 'render', 'renderEncounter', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
	    this.model.bind('reset', this.render);
	    this.model.bind('add', this.renderEncounter); 

	    this.render();
	},

	events: {
		"click #CreateEncounter": "onSubmit"
	},

	render: function() {
		this.$el.html("<input type=\"button\" id=\"CreateEncounter\" value=\"Create Encounter\" />"+
			"<br>Name <input type=\"text\" id=\"NewEncounterName\">");
		this.model.forEach(this.renderEncounter)
		
		return this;
	},

	renderEncounter: function(encounter) {
		var encounterView = new EncounterView({model:encounter});
		this.$el.append(encounterView.render().$el);
	},

	onCreated: function(encounter, response) {
		this.model.add(encounter);
	},

	onError: function(encounter, response) {
		console.log("Error saving encounter.", encounter, response);
	},

	onSubmit: function() {
		var encounter = new Encounter({name:$('#NewEncounterName').val()});
		encounter.save({}, {
			success: this.onCreated,
			error: this.onError
		});
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