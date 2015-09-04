QuestInfo.Controllers.EncounterLicenseListController = function (options) {

	this.data = {
		quest: options.quest
	}
		
	this.view = options.view;
	
	this.viewEncounter = function(data) {
		window.location.href = '/classquest/encounters/'+data.attributes.encounter.id;
	};

	this.deleteEncounter = function(data) {
		data.attributes.encounter.destroy();
	};

	this.removeEncounter = function(data) {
		data.destroy();
	};

	this.data.quest.attributes.encounterLicenses.on("add",this.view.renderEncounterLicenseListItem);
	
	this.bindEvents = function () {
		this.view.on("deleteEncounter",this.deleteEncounter, this);
		this.view.on("removeEncounter",this.removeEncounter, this);
		this.view.on("viewEncounter",this.viewEncounter, this);
	}
}