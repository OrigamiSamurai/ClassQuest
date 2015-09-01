Quest.Models.Quest = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		guildCharters: [],
		questLicenses: [],
		encounterLicenses: []
	},

/*
	relations: [
		{
			type: Backbone.HasMany,
			key: 'guildCharters',
			relatedModel: 'CQ.GuildCharter',
			includeInJSON: 'id',
			collectionType: 'CQ.GuildCharterCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'questLicenses',
			relatedModel: 'CQ.QuestLicense',
			includeInJSON: 'id',
			collectionType: 'CQ.QuestLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'encounterLicenses',
			relatedModel: 'CQ.EncounterLicense',
			includeInJSON: 'id',
			collectionType: 'CQ.EncounterLicenseCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'quest',
				includeInJSON: 'id'
			}
		},
	],
  */

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/quests'
});