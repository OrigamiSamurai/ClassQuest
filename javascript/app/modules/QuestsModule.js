CQ.Modules.QuestsModule = function(quests) {

	this.quests = quests;

	this.start = function () {
		if (!CQ.modules) {CQ.modules = {};};
		
		CQ.modules.quests = {};
		
		CQ.modules.quests.questsView = new CQ.Views.QuestCollectionView({model:this.quests});
	}

	return this;
};