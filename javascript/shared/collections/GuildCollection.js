CQ.Collections.GuildCollection = Backbone.Collection.extend({
	model: CQ.Models.Guild,

	url: 'http://www.kreutzlandry.com/classquest/api/guilds'
});