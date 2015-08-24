var GuildMembershipCollection = Backbone.Collection.extend({
	model: GuildMembership,

	url: 'http://www.kreutzlandry.com/classquest/api/guildmemberships'
});