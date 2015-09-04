QuestInfo.Controllers.QuestDetailsController = function (options) {

	this.data = {
		quest: options.quest
	}
		
	this.view = options.view;

	this.saveQuest = function(data) {
		
		console.log('save quest from data: ',data);
		data.save({}, {
			success: this.onSaved,
			error: this.onError
		});
	};
	
	this.onSaved = function(quest, response) {
		// Do nothing... potentially show saved message later
	};
	
	this.onError = function(quest, response) {
		console.log("Error saving quest.", quest, response);
	};
	
	_.bindAll(this, "onSaved");
}