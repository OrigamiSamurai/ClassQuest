var Achievement = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		achievementCertificates: []
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'achievementCertificates',
			relatedModel: 'AchievementCertificate',
			includeInJSON: 'id',
			collectionType: 'AchievementCertificateCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'achievement',
				includeInJSON: 'id'
			}
		}
	],

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/achievements'
});