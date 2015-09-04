CQ.Modules.QuestModule = function(questId) {

	this.questId = questId;

	this.start = function () {
		if (!CQ.modules) {CQ.modules = {};};
		
		CQ.modules.quest = {};
		
		thisQuest = CQ.quests.get(this.questId);
		
		CQ.modules.quest.questView = new CQ.Views.QuestView({model:thisQuest});
		
		CQ.modules.quest.encounterLicensesView = new CQ.Views.EncounterLicenseCollectionView({model:thisQuest.attributes.encounterLicenses, questId:this.questId});

	}

	return this;

};