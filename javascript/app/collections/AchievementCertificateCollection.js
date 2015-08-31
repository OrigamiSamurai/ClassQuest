CQ.AchievementCertificateCollection = Backbone.Collection.extend({
	model: CQ.AchievementCertificate,

	url: 'http://www.kreutzlandry.com/classquest/api/achievementcertificates'
});