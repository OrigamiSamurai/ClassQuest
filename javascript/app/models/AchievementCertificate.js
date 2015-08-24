var AchievementCertificate = Backbone.RelationalModel.extend({
	defaults: {
		adventurer: null,
		achievement: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/achievementcertificates'
});