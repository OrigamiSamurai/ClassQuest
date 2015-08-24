var AchievementCollection = Backbone.Collection.extend({
	model: Achievement,

	url: 'http://www.kreutzlandry.com/classquest/api/achievements'
});