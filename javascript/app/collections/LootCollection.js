var LootCollection = Backbone.Collection.extend({
	model: Loot,

	url: 'http://www.kreutzlandry.com/classquest/api/loots'
});