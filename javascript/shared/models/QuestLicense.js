CQ.Models.QuestLicense = Backbone.RelationalModel.extend({
	defaults: {
		name: '',
		adventurer: null,
		quest: null
	},

	urlRoot: 'http://www.kreutzlandry.com/classquest/api/questlicenses'
});