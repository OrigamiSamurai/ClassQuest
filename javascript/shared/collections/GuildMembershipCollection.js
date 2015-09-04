CQ.Collections.GuildMembershipCollection = Backbone.Collection.extend({
	model: CQ.Models.GuildMembership,

	url: 'http://www.kreutzlandry.com/classquest/api/guildmemberships'
});