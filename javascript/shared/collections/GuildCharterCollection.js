CQ.Collections.GuildCharterCollection = Backbone.Collection.extend({
	model: CQ.Models.GuildCharter,

	url: 'http://www.kreutzlandry.com/classquest/api/guildcharters'
});