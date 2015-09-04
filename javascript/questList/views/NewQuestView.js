// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestList.Views.NewQuestView = Backbone.Epoxy.View.extend({
	events: {
		"click .createQuest":"submitNewQuest",
	},
	
	bindings: {
		"input.newQuestPeriod":"value:integer(period)",
		"input.newQuestName":"value:name"
	},
	
	render: function () {
		this.$el.html(
			"<h4>Create new quest:</h4>"+
			"Period: <input type=\"text\" class=\"newQuestPeriod\">"+
			"Name: <input type=\"text\" class=\"newQuestName\">"+
			"<input type=\"button\" class=\"createQuest\" value=\"Create Quest\" />"		
		);
		this.applyBindings();
		
		return this;
	},
	
	submitNewQuest: function() {
		this.trigger("submitNewQuest",this.model);
	}
});