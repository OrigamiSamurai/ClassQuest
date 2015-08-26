var Guild = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		guildMemberships: [],
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'guildCharters',
			relatedModel: 'GuildCharter',
			includeInJSON: 'id',
			collectionType: 'GuildCharterCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'guildMemberships',
			relatedModel: 'GuildMembership',
			includeInJSON: 'id',
			collectionType: 'GuildMembershipCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		}
	],

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/guilds'
});