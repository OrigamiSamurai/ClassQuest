var Guild = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		guildMemberships: [],
		createdDate: new Date(),
		updatedDate: new Date()
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'guildCharters',
			relatedModel: 'GuildCharter',
			includeInJSON: 'id',
			collectionType: 'GuildCharterCollection',
			autoFetch: true,
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
			autoFetch: true,
			reverseRelation: {
				key: 'guild',
				includeInJSON: 'id'
			}
		}
	],

  parse: function(response) {
      response.createdDate = new Date(response.createdDate);
      response.updatedDate = new Date(response.updatedDate);
      return response;
  },

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/guilds'
});