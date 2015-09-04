CQ.Collections.QuestLicenseCollection = Backbone.Collection.extend({
	model: CQ.Models.QuestLicense,

	url: 'http://www.kreutzlandry.com/classquest/api/questlicenses'
});