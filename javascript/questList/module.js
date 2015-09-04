window.QuestList = {
	Controllers: {},
	Collections: {},
	Models: {},
	Views: {}
}

QuestList.App = function (options) {
	
	this.container = options.container;

	this.data = {
		quests: options.quests ? options.quests : new CQ.Collections.QuestCollection()
	};
		
	this.views = { 
		newQuestView: new QuestList.Views.NewQuestView({model:new CQ.Models.Quest(), el:'.newQuestContainer'}),
		questListView: new QuestList.Views.QuestListView({collection:this.data.quests, el:'.questListContainer'})
	};
	
	this.controllers = {
		newQuestController: new QuestList.Controllers.NewQuestController({quests:this.data.quests,view:this.views.newQuestView}),
		questListController: new QuestList.Controllers.QuestListController({quests:this.data.quests,view:this.views.questListView}),
	}
	
	QuestList.App.prototype.start = function() {
		this.container.append(this.views.newQuestView.render());
		this.container.append(this.views.questListView.render());
		
		this.controllers.newQuestController.bindEvents();
		this.controllers.questListController.bindEvents();		
	}
	
	return this;
}
