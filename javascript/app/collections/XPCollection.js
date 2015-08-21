var XpCollection = Backbone.Collection.extend({
	model: Xp,
	
	url: 'http://www.kreutzlandry.com/classquest/api/xps'
});