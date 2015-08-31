CQ.XpCollection = Backbone.Collection.extend({
	model: CQ.Xp,
	
	url: 'http://www.kreutzlandry.com/classquest/api/xps'
});