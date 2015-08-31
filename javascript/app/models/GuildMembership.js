CQ.GuildMembership = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guild: null,
		adventurer: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/guildlicenses'
});