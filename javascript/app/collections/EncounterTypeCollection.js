CQ.EncounterTypeCollection = Backbone.Collection.extend({
	model: CQ.EncounterType,

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/encountertypes'
})