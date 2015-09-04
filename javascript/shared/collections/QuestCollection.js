CQ.Collections.QuestCollection = Backbone.Collection.extend({
	model: CQ.Models.Quest,

	url: 'http://www.kreutzlandry.com/classquest/api/quests'
});