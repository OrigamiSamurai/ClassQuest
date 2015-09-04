// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.EncounterLicenseListItemView = Backbone.Epoxy.View.extend({
	events: {
		"click .viewEncounter":"viewEncounter",
		"click .deleteEncounter":"deleteEncounter",
		"click .removeEncounter":"removeEncounter"
	},
	
	computeds: {
		// encounter name
		// encounter max XP
		// encounter type
		// encounter date
	},

	bindings: {
		"span.encounterName":"text:encounterName",
		"span.encounterMaxXp":"text:encounterMaxXp",
		"span.encounterType":"text:encounterType",
		"span.encounterDate":"text:encounterDate"
	},
	
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'remove', this.remove);
	},
	
	render: function () {
		this.$el.html(
			"Name: <span class=\"encounterName\">"+
			"Max XP: <span class=\"encounterMaxXp\">"+
			"Encounter Type: <span class=\"encounterMaxXp\"></span>"+
			"Encounter Date: <span class=\"encounterDate\"></span>"+
			"<input type=\"button\" class=\"removeEncounter\" value=\"Remove\" />"+
			"<input type=\"button\" class=\"viewEncounter\" value=\"View/Edit\" />"+
			"<input type=\"button\" class=\"deleteEncounter\" value=\"Delete\" />"
		);
		this.applyBindings();
		
		return this;
	},
	
	removeEncounter: function() {
		this.trigger("removeEncounter",this.model);
	},
	
	viewEncounter: function() {
		this.trigger("viewEncounter",this.model);
	},
	
	deleteEncounter: function() {
		if(confirm("Are you really sure you want to delete "+this.model.attributes.encounter.attributes.name+"?")) {
			this.trigger("deleteEncounter",this.model);
 		}

	}
});