CQ.Collections.AchievementCertificateCollection = Backbone.Collection.extend({
	model: CQ.Models.AchievementCertificate,

	url: 'http://www.kreutzlandry.com/classquest/api/achievementcertificates'
});