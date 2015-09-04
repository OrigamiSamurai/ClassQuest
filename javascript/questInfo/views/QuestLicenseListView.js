// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.QuestLicenseListView = Backbone.View.extend({
	collection: CQ.Collections.QuestLicenseCollection,
	
	initialize: function() {
		_.bindAll(this, "render","renderQuestLicense");
	},
	
	events: {
		"viewAdventurer":"viewAdventurer",
		"deleteAdventurer":"deleteAdventurer",
		"removeQuestLicense":"removeQuestLicense"
	},
	
	render: function () {
		console.log(this);
		_.each(this.collection.models,this.renderQuestLicense);
	},
	
	renderQuestLicense: function(questLicense) {
		questLicenseView = new QuestInfo.Views.QuestLicenseView({model:questLicense});
		this.$el.append(questLicenseView.render().$el);
		questItemView.on("saveAdventurer",this.saveAdventurer,this);
		questItemView.on("viewAdventurer",this.viewAdventurer,this);
		questItemView.on("deleteAdventurer",this.deleteAdventurer,this);
		questItemView.on("removeAdventurer",this.removeAdventurer,this);
	},
	
	viewAdventurer: function(data) {
		this.trigger("viewAdventurer",data);
	},
	
	deleteAdventurer: function(data) {
		this.trigger("deleteAdventurer",data);
	},

	removeAdventurer: function(data) {
		this.trigger("removeAdventurer",data);
	}
	
});