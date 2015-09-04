QuestList.Controllers.QuestListController = function (options) {

	this.data = {
		quests: options.quests
	}
		
	this.view = options.view;
		
	this.deleteQuest = function(data) {
		data.destroy();
	};
	
	this.saveQuest = function(data) {
		data.save();
	};
	
	this.viewQuest = function(data) {
		window.location.href = '/classquest/quests/'+data.id;
	};
	
	this.data.quests.on("add",this.view.renderQuestListItem);
	
	this.bindEvents = function () {
		this.view.on("deleteQuest",this.deleteQuest, this);
		this.view.on("saveQuest",this.saveQuest, this);
		this.view.on("viewQuest",this.viewQuest, this);
	}
}