CQ.Models.Guild = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		guildMemberships: [],
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'guildCharters',
			relatedModel: 'CQ.Models.GuildCharter',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.GuildCharterCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'guildMemberships',
			relatedModel: 'CQ.Models.GuildMembership',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.GuildMembershipCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		}
	],

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/guilds'
});