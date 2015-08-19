var EncounterTypes = ['training','camping','adventuring','random encounter']

var Encounter = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		maxXP: 1,
		awardedXP: 0,
		timeEarned: new Date(),
		timeAwarded: new Date(),
		lastEdited: new Date(),
		encounterType: ''
	}
});

var EncounterCollection = Backbone.Collection.extend({
	model: Encounter
});

var TESTENCOUNTERS = new EncounterCollection();

TESTENCOUNTERS.add(new Encounter({awardedXP: 100}));
TESTENCOUNTERS.add(new Encounter({awardedXP: 60}));