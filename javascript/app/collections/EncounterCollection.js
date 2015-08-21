var EncounterCollection = Backbone.Collection.extend({
	model: Encounter,

	url: 'http://www.kreutzlandry.com/classquest/api/encounters'
});