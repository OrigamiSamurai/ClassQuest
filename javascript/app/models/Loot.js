var Quest = Backbone.RelationalModel.extend({
	defaults: {
		name: ''
		adventurer: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/loot'
});