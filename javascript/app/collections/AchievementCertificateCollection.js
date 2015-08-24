var AchievementCertificateCollection = Backbone.Collection.extend({
	model: AchievementCertificate,

	url: 'http://www.kreutzlandry.com/classquest/api/achievementcertificates'
});