CQ.Collections.EncounterCollection = Backbone.Collection.extend({
	model: CQ.Models.Encounter,

	url: 'http://www.kreutzlandry.com/classquest/api/encounters'
});