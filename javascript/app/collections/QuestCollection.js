CQ.QuestCollection = Backbone.Collection.extend({
	model: CQ.Quest,

	url: 'http://www.kreutzlandry.com/classquest/api/quests'
});