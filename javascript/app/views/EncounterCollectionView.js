var EncounterCollectionView = Backbone.Epoxy.View.extend({

	el: $('#EncounterContainer'),

	initialize: function() {
		console.log("initialize encounter collection view")

    _.bindAll(this, 'render', 'renderEncounter', 'onSubmit', 'onCreated', 'onError');// onsubmits are currently used for saving lower level items
    this.model.bind('change', this.render);
    this.model.bind('reset', this.render);
    this.model.bind('add', this.renderEncounter); 
	},

	events: {
		"click #CreateEncounter": "onSubmit"
	},

	render: function() {
		console.log("render encounter collection");
		this.$el.append("<input type=\"button\" id=\"CreateEncounter\" value=\"Create Encounter\" />"+
			"Name <input type=\"text\" id=\"NewEncounterName\"><ul></ul>");
		console.log("models in encounter collection", this.model.models);
		this.model.forEach(this.renderEncounter)
		return this.$el;
	},

	renderEncounter: function(encounter) {
		console.log("show an encounter");
		var encounterView = new EncounterView({model:encounter});
		this.$el.find('ul').append(encounterView.$el);
	},

	onCreated: function(encounter, response) {
		console.log("Encounter submitted successfully.", encounter, response);
		this.model.add(encounter);
	},

	onError: function(encounter, response) {
		console.log("Error saving encounter.", encounter, response);
	},

	onSubmit: function() {
		console.log("create new encounter");
		var encounter = new Encounter({name:$('#NewEncounterName').val()});
		encounter.save({}, {
			success: this.onCreated,
			error: this.onError
		});
	}

});