CQ.GuildCollection = Backbone.Collection.extend({
	model: CQ.Guild,

	url: 'http://www.kreutzlandry.com/classquest/api/guilds'
});