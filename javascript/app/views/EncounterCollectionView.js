CQ.Views.EncounterCollectionView = Backbone.Epoxy.View.extend({

	el: '#EncounterContainer',

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
		this.$el.html(
			"Name <input type=\"text\" id=\"NewEncounterName\">"+
			"Type <select class=\"encounterTypePicker\"></select>"+
			"Max XP <input type=\"text\" id=\"NewEncounterMaxXp\">"+
			"Encountered Date: <input type=\"text\" class=\"date\">"+
			"<input type=\"button\" id=\"CreateEncounter\" value=\"Create Encounter\" />"
			);

		this.renderEncounterTypePicker();
		this.model.forEach(this.renderEncounter)
		
		return this;
	},

	renderEncounterTypePicker: function() {
		var encounterTypePicker = new CQ.Views.EncounterTypePickerView({el:this.$el.find('.encounterTypePicker'),model:CQ.encounterTypes})
		encounterTypePicker.render();
	},

	renderEncounter: function(encounter) {
		var encounterView = new CQ.Views.EncounterView({model:encounter});
		this.$el.append(encounterView.render().$el);
	},

	onCreated: function(encounter, response) {
		this.model.add(encounter);
	},

	onError: function(encounter, response) {
		console.log("Error saving encounter.", encounter, response);
	},

	onSubmit: function() {
		var encounter = new CQ.Models.Encounter({
			name:$('#NewEncounterName').val(),
			typeId: parseInt($('.encounterTypePicker').val()),
			maxXp: parseInt($('#NewEncounterMaxXp').val()),
			encounterDate: new Date($('.date').val())
			});
		console.log(encounter);
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