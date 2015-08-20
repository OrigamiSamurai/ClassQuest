var XPCollection = Backbone.Collection.extend({
	model: XP,
	
	url: 'http://www.kreutzlandry.com/classquest/api/xps',

	parse: function(response, xhr) {		
		return response.data;
	},

	fetchSuccess: function(collection, response) {
		console.log("XPCollection fetch successful", response);
		console.log("Models: ", collection.models);
	},

  fetchError: function(collection, response) {
  	console.log("XPCollection fetch error", response);
  	console.log("failed collection: ",collection);
  }
});