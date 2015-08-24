var GuildCollection = Backbone.Collection.extend({
	model: Guild,

	url: 'http://www.kreutzlandry.com/classquest/api/guildcollections'
});