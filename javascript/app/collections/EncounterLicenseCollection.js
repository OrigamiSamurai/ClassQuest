var EncounterLicenseCollection = Backbone.Collection.extend({
	model: EncounterLicense,

	url: 'http://www.kreutzlandry.com/classquest/api/encounterLicenses'
});