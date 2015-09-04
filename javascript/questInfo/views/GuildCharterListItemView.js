// A VIEW IS MEANT ONLY TO WRAP THE DOM AND COMMUNICATE INTENTIONS TO THE CONTROLLER

QuestInfo.Views.GuildCharterListItemView = Backbone.Epoxy.View.extend({
	events: {
		"click .viewGuild":"viewGuild",
		"click .deleteGuild":"deleteGuild",
		"click .removeGuild":"removeGuild"
	},
	
	computeds: {
		// guild name
		// guild max XP
		// guild type
		// guild date
	},

	bindings: {
		"span.guildName":"text:guildName",
	},
	
	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'remove', this.remove);
	},
	
	render: function () {
		this.$el.html(
			"Name: <span class=\"guildName\">"+
			"<input type=\"button\" class=\"removeGuild\" value=\"Remove\" />"+
			"<input type=\"button\" class=\"viewGuild\" value=\"View/Edit\" />"+
			"<input type=\"button\" class=\"deleteGuild\" value=\"Delete\" />"
		);
		this.applyBindings();
		
		return this;
	},
	
	removeGuild: function() {
		this.trigger("removeGuild",this.model);
	},
	
	viewGuild: function() {
		this.trigger("viewGuild",this.model);
	},
	
	deleteGuild: function() {
		if(confirm("Are you really sure you want to delete "+this.model.attributes.guild.attributes.name+"?")) {
			this.trigger("deleteGuild",this.model);
 		}

	}
});