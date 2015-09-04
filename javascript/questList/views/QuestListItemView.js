// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestList.Views.QuestListItemView = Backbone.Epoxy.View.extend({
	events: {
		"click .saveQuest":"saveQuest",
		"click .viewQuest":"viewQuest",
		"click .deleteQuest":"deleteQuest"
	},
	
	bindings: {
		"input.questPeriod":"value:integer(period)",
		"input.questName":"value:name"
	},
	
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},
	
	render: function () {
		this.$el.html(
			"Period: <input type=\"text\" class=\"questPeriod\">"+
			"Name: <input type=\"text\" class=\"questName\">"+
			"<input type=\"button\" class=\"saveQuest\" value=\"Save\" />"+
			"<input type=\"button\" class=\"viewQuest\" value=\"View/Edit\" />"+
			"<input type=\"button\" class=\"deleteQuest\" value=\"Delete\" />"
		);
		this.applyBindings();
		
		return this;
	},
	
	saveQuest: function() {
		this.trigger("saveQuest",this.model);
	},
	
	viewQuest: function() {
		this.trigger("viewQuest",this.model);
	},
	
	deleteQuest: function() {
		if(confirm("Are you really sure you want to delete Period "+this.model.attributes.period+" "+this.model.attributes.name+"?")) {
			this.trigger("deleteQuest",this.model);
 		}

	}
});