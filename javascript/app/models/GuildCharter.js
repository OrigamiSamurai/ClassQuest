var GuildCharter = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guild: null,
		quest: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/guildcharters'
});