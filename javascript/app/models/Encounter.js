var Encounter = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		maxXPAward: 1,
		timeEncountered: new Date(),
		xpType: '',
		xpAwards: new XPAwardCollection()
	}
});