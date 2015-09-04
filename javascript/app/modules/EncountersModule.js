CQ.Modules.EncountersModule = function(encounters) {

	this.encounters = encounters;

	this.start = function () {
		if (!CQ.modules) {CQ.modules = {};};
		
		CQ.modules.encounters = new CQ.Views.EncounterCollectionView({model:this.encounters});		
	}

	return this;
};