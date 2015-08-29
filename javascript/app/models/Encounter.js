var Encounter = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		maxXp: 1,
		typeId: 0,
		encounterLicenses: [],
		xps: [],
		encounterDate: new Date(),
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'xps',
			relatedModel: 'Xp',
			includeInJSON: 'id',
			collectionType: 'XpCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'encounter',
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
				key: 'encounter',
				includeInJSON: 'id'
			}
		}
	],

  parse: function(response) {
      response.encounterDate = new Date(response.encounterDate);
      return response;
  },

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/encounters'
});