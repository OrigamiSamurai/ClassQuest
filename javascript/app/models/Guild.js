CQ.Guild = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		guildMemberships: [],
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'guildCharters',
			relatedModel: 'CQ.GuildCharter',
			includeInJSON: 'id',
			collectionType: 'CQ.GuildCharterCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'guildMemberships',
			relatedModel: 'CQ.GuildMembership',
			includeInJSON: 'id',
			collectionType: 'CQ.GuildMembershipCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		}
	],

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/guilds'
});