CQ.Achievement = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		achievementCertificates: []
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'achievementCertificates',
			relatedModel: 'CQ.AchievementCertificate',
			includeInJSON: 'id',
			collectionType: 'CQ.AchievementCertificateCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'achievement',
				includeInJSON: 'id'
			}
		}
	],

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/achievements'
});