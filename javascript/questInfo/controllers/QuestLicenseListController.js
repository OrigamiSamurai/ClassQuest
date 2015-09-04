QuestInfo.Controllers.QuestLicenseListController = function (options) {

	this.data = {
		quest: options.quest
	}
		
	this.view = options.view;
	
	this.viewAdventurer = function(data) {
		window.location.href = '/classquest/adventurers/'+data.attributes.adventurer.id;
	};

	this.deleteAdventurer = function(data) {
		data.attributes.adventurer.destroy();
	};

	this.removeAdventurer = function(data) {
		data.destroy();
	};
	
	this.data.quest.attributes.questLicenses.on("add",this.view.renderQuestLicenseListItem);
	
	this.bindEvents = function () {
		this.view.on("deleteAdventurer",this.deleteAdventurer, this);
		this.view.on("removeAdventurer",this.removeAdventurer, this);
		this.view.on("viewAdventurer",this.viewAdventurer, this);
	}
}