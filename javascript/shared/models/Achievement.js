CQ.Models.Achievement = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		achievementCertificates: []
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'achievementCertificates',
			relatedModel: 'CQ.Models.AchievementCertificate',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.AchievementCertificateCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'achievement',
				includeInJSON: 'id'
			}
		}
	],

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/achievements'
});