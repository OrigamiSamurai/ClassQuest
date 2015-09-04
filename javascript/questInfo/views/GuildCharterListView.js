// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.GuildCharterListView = Backbone.View.extend({
	collection: CQ.Collections.GuildCharterCollection,
	
	initialize: function() {
		_.bindAll(this, "renderGuildCharter");
	},
	
	events: {
		"viewGuild":"viewGuild",
		"deleteGuild":"deleteGuild",
		"removeGuildCharter":"removeGuildCharter"
	},
	
	render: function () {
		_.each(this.collection.models,this.renderGuildCharter);
	},
	
	renderGuildCharter: function(guildCharter) {
		guildCharterView = new QuestInfo.Views.GuildCharterView({model:guildCharter});
		this.$el.append(guildCharterView.render().$el);
		questItemView.on("saveGuild",this.saveGuild,this);
		questItemView.on("viewGuild",this.viewGuild,this);
		questItemView.on("deleteGuild",this.deleteGuild,this);
		questItemView.on("removeGuild",this.removeGuild,this);
	},
	
	viewGuild: function(data) {
		this.trigger("viewGuild",data);
	},
	
	deleteGuild: function(data) {
		this.trigger("deleteGuild",data);
	},

	removeGuild: function(data) {
		this.trigger("removeGuild",data);
	}
	
});