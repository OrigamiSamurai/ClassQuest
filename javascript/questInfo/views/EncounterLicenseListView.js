// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.EncounterLicenseListView = Backbone.View.extend({
	collection: CQ.Collections.EncounterLicenseCollection,
	
	initialize: function() {
		_.bindAll(this, "renderEncounterLicense");
	},
	
	events: {
		"viewEncounter":"viewEncounter",
		"deleteEncounter":"deleteEncounter",
		"removeEncounter":"removeEncounter"
	},
	
	render: function () {
		console.log(this.collection.models);
		_.each(this.collection.models,this.renderEncounterLicense);
	},
	
	renderEncounterLicense: function(encounterLicense) {
		encounterLicenseView = new QuestInfo.Views.EncounterLicenseView({model:encounterLicense});
		this.$el.append(encounterLicenseView.render().$el);
		questItemView.on("saveEncounter",this.saveEncounter,this);
		questItemView.on("viewEncounter",this.viewEncounter,this);
		questItemView.on("deleteEncounter",this.deleteEncounter,this);
		questItemView.on("removeEncounter",this.removeEncounter,this);
	},
	
	viewEncounter: function(data) {
		this.trigger("viewEncounter",data);
	},
	
	deleteEncounter: function(data) {
		this.trigger("deleteEncounter",data);
	},

	removeEncounter: function(data) {
		this.trigger("removeEncounter",data);
	}
	
});