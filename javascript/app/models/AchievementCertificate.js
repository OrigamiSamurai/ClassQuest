CQ.AchievementCertificate = Backbone.RelationalModel.extend({
	defaults: {
		adventurer: null,
		achievement: null,
		createdDate: new Date()
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/achievementcertificates',

	initialize: function(options) {
		this.attributes.createdDate = new Date(options.encounterDate);
	},
});