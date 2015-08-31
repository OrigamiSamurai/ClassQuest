CQ.QuestLicenseCollection = Backbone.Collection.extend({
	model: CQ.QuestLicense,

	url: 'http://www.kreutzlandry.com/classquest/api/questlicenses'
});