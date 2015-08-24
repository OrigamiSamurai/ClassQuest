var EncounterLicense = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		encounter: null,
		quest: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/encounterlicenses'
});