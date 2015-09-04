QuestInfo.Controllers.GuildCharterListController = function (options) {

	this.data = {
		quest: options.quest
	}
		
	this.view = options.view;
	
	this.viewGuild = function(data) {
		window.location.href = '/classquest/guilds/'+data.attributes.guild.id;
	};

	this.deleteGuild = function(data) {
		data.attributes.guild.destroy();
	};

	this.removeGuild = function(data) {
		data.destroy();
	};
	
	this.data.quest.attributes.guildCharters.on("add",this.view.renderGuildCharterListItem);
	
	this.bindEvents = function () {
		this.view.on("deleteGuild",this.deleteGuild, this);
		this.view.on("removeGuild",this.removeGuild, this);
		this.view.on("viewGuild",this.viewGuild, this);
	}
}