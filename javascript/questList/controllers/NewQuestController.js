QuestList.Controllers.NewQuestController = function (options) {

	this.data = {
		quests: options.quests
	}
		
	this.view = options.view;
		
	this.createQuest = function(event, data) {
		
		console.log('create quest from data: ',data);
		data.save({}, {
			success: this.onCreated,
			error: this.onError
		});
	};
	
	this.onCreated = function(quest, response) {
		this.data.quests.add(quest);
		this.view.model = new CQ.Models.Quest();
	};
	
	this.onError = function(quest, response) {
		console.log("Error saving quest.", quest, response);
	};
	
	this.bindEvents = function () {
		this.view.on("submitNewQuest",this.createQuest, this);
	};
	
	_.bindAll(this, "onCreated");
}