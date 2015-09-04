// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.QuestLicenseListItemView = Backbone.Epoxy.View.extend({
	events: {
		"click .viewAdventurer":"viewAdventurer",
		"click .deleteAdventurer":"deleteAdventurer",
		"click .removeAdventurer":"removeAdventurer"
	},
	
	computeds: {
		// adventurer name
		// adventurer max XP
		// adventurer type
		// adventurer date
	},

	bindings: {
		"span.adventurerLastName":"text:adventurerLastName",
		"span.adventurerFirstName":"text:adventurerFirstName",
		"span.adventurerLevel":"text:adventurerLevel",
		"span.adventurerCurrentXp":"text:adventurerCurrentXp"
	},
	
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'remove', this.remove);
	},
	
	render: function () {
		this.$el.html(
			"Name: <span class=\"adventurerLastName\">, <span class=\"adventurerFirstName\">"+
			"Level: <span class=\"adventurerLevel\">"+
			"Current XP: <span class=\"adventurerCurrentXp\"></span>"+
			"<input type=\"button\" class=\"removeAdventurer\" value=\"Remove\" />"+
			"<input type=\"button\" class=\"viewAdventurer\" value=\"View/Edit\" />"+
			"<input type=\"button\" class=\"deleteAdventurer\" value=\"Delete\" />"
		);
		this.applyBindings();
		
		return this;
	},
	
	removeAdventurer: function() {
		this.trigger("removeAdventurer",this.model);
	},
	
	viewAdventurer: function() {
		this.trigger("viewAdventurer",this.model);
	},
	
	deleteAdventurer: function() {
		if(confirm("Are you really sure you want to delete "+this.model.attributes.adventurer.attributes.name+"?")) {
			this.trigger("deleteAdventurer",this.model);
 		}

	}
});