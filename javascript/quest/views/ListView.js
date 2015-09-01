Quest.Views.ListView = Backbone.View.extend({

	events: {
		"input.deleteQuest click":"deleteQuest",
		"input.editQuest click":"editQuest"	
	},

	render: function() {
		this.$el.html(
			"Quest name, etc"+
			"<input type=\"button\" class=\"editQuest\" value=\"Edit\">"+
			"<input type=\"button\" class=\"deleteQuest\" value=\"Delete\">" 
		)
	},

	editQuest: function(arg1,arg2,arg3) {
		console.log('editQuest args');
		console.log(arg1,arg2,arg3);
		console.log('trigger the X quest wants to be edited event');
	},

	deleteQuest: function(arg1,arg2,arg3) {
		console.log('editQuest args');
		console.log(arg1,arg2,arg3);
		console.log('trigger the X quest wants to be deleted event');
	},

	sortQuests: function(arg1,arg2,arg3) {
		console.log('sortQuests args');
		console.log(arg1,arg2,arg3);
		console.log('trigger the sort quests event');
	}

	// It's just a view, but it has a namespace
})