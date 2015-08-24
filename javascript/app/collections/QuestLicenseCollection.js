var QuestLicenseCollection = Backbone.Collection.extend({
	model: QuestLicense,

	url: 'http://www.kreutzlandry.com/classquest/api/questlicenses'
});