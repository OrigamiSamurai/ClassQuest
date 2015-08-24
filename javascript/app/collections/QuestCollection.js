var QuestCollection = Backbone.Collection.extend({
	model: Quest,

	url: 'http://www.kreutzlandry.com/classquest/api/quests'
});