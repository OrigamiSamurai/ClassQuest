CQ.Models.Quest = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		period: 0,
		guildCharters: [],
		questLicenses: [],
		encounterLicenses: []
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
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'questLicenses',
			relatedModel: 'CQ.Models.QuestLicense',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.QuestLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'encounterLicenses',
			relatedModel: 'CQ.Models.EncounterLicense',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.EncounterLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
	],

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/quests'
});