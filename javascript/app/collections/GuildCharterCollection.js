CQ.GuildCharterCollection = Backbone.Collection.extend({
	model: CQ.GuildCharter,

	url: 'http://www.kreutzlandry.com/classquest/api/guildcharters'
});