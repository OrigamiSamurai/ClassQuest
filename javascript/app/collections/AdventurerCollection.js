CQ.AdventurerCollection = Backbone.Collection.extend({
	model: CQ.Adventurer,

	url: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});