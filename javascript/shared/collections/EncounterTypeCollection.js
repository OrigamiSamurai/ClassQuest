CQ.Collections.EncounterTypeCollection = Backbone.Collection.extend({
	model: CQ.Models.EncounterType,

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/encountertypes'
})