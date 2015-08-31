CQ.EncounterCollection = Backbone.Collection.extend({
	model: CQ.Encounter,

	url: 'http://www.kreutzlandry.com/classquest/api/encounters'
});