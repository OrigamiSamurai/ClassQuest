Quest.Collections.Quests = Backbone.Collection.extend({
	model: Quest.Models.Quest,

	url: 'http://www.kreutzlandry.com/classquest/api/quests'
});