CQ.Models.EncounterLicense = Backbone.RelationalModel.extend({
	defaults: {
		encounter: null,
		quest: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/encounterlicenses'
});