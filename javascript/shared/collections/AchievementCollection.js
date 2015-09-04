CQ.Collections.AchievementCollection = Backbone.Collection.extend({
	model: CQ.Models.Achievement,

	url: 'http://www.kreutzlandry.com/classquest/api/achievements'
});