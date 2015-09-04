CQ.Collections.XpCollection = Backbone.Collection.extend({
	model: CQ.Models.Xp,
	
	url: 'http://www.kreutzlandry.com/classquest/api/xps'
});