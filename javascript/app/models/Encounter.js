CQ.Encounter = Backbone.RelationalModel.extend({
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
			relatedModel: 'CQ.Xp',
			includeInJSON: 'id',
			collectionType: 'CQ.XpCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'encounter',
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
				key: 'encounter',
				includeInJSON: 'id'
			}
		}
	],

	initialize: function(options) {
		this.attributes.encounterDate = new Date(options.encounterDate);
	},

  	parse: function(response) {
      	response.encounterDate = new Date(response.encounterDate);
      	return response;
  	},

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/encounters'
});