var Quest = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		questLicenses: [],
		encounterLicenses: []
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
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'questLicenses',
			relatedModel: 'QuestLicense',
			includeInJSON: 'id',
			collectionType: 'QuestLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'encounterLicenses',
			relatedModel: 'EncounterLicense',
			includeInJSON: 'id',
			collectionType: 'EncounterLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
	],

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/quests'
});