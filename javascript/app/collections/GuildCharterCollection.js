var GuildCharterCollection = Backbone.Collection.extend({
	model: GuildCharter,

	url: 'http://www.kreutzlandry.com/classquest/api/guildcharters'
});