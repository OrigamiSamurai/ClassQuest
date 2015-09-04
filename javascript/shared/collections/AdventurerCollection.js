CQ.Collections.AdventurerCollection = Backbone.Collection.extend({
	model: CQ.Models.Adventurer,

	url: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});