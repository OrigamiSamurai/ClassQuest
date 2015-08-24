var AdventurerCollection = Backbone.Collection.extend({
	model: Adventurer,

	url: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});