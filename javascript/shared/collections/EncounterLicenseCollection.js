CQ.Collections.EncounterLicenseCollection = Backbone.Collection.extend({
	model: CQ.Models.EncounterLicense,

	url: 'http://www.kreutzlandry.com/classquest/api/encounterLicenses'
});