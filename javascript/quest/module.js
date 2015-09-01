window.Quest = {
	Controllers: {},
	Collections: {},
	Models: {},
	Views: {}
}

class Quest.App {

	initialize: function(options) {
		console.log('do something based on these options',options);
		// load the model definitions?
		// load the collection definitions?
		// load the view definitions?
		// load the controller definitions?
	},

	data: {
		quests: new Quest.Collection.Quests()
	},

	views: {
		listView: new Quest.Views.ListView()
	},

	questListController: new Quest.Controllers.QuestListController()
	
}