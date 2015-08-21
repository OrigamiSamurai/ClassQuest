var Encounter = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		maxXp: 1,
		typeId: 0,
		xps: [],
		date: new Date(),
		createdDate: new Date(),
		updatedDate: new Date()
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'xps',
			relatedModel: 'Xp',
			includeInJSON: 'id',
			collectionType: 'XpCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'encounter',
				includeInJSON: 'id'
			}
		}
	],

  parse: function(response) {
      response.date = new Date(response.date);
      response.createdDate = new Date(response.createdDate);
      response.updatedDate = new Date(response.updatedDate);
      return response;
  },

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/encounters'
});