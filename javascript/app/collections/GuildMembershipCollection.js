CQ.GuildMembershipCollection = Backbone.Collection.extend({
	model: CQ.GuildMembership,

	url: 'http://www.kreutzlandry.com/classquest/api/guildmemberships'
});