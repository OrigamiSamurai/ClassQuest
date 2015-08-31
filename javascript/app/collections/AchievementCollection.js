CQ.AchievementCollection = Backbone.Collection.extend({
	model: CQ.Achievement,

	url: 'http://www.kreutzlandry.com/classquest/api/achievements'
});