// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestList.Views.QuestListView = Backbone.View.extend({
	collection: CQ.Collections.QuestCollection,
	
	initialize: function() {
		_.bindAll(this, "renderQuestListItem");
	},
	
	events: {
		"saveQuest":"saveQuest",
		"viewQuest":"viewQuest",
		"deleteQuest":"deleteQuest"
	},
	
	render: function () {
		_.each(this.collection.models,this.renderQuestListItem);
	},
	
	renderQuestListItem: function(quest) {
		questItemView = new QuestList.Views.QuestListItemView({model:quest});
		this.$el.append(questItemView.render().$el);
		questItemView.on("saveQuest",this.saveQuest,this);
		questItemView.on("viewQuest",this.viewQuest,this);
		questItemView.on("deleteQuest",this.deleteQuest,this);
	},
	
	saveQuest: function(data) {
		this.trigger("saveQuest",data);
	},
	
	viewQuest: function(data) {
		this.trigger("viewQuest",data);
	},
	
	deleteQuest: function(data) {
		this.trigger("deleteQuest",data);
	}
});