var XPAward = Backbone.Model.extend({
	defaults: {
		id: '',
		awardedXP: 0,
		timeAwarded: new Date(),
		lastEdited: new Date(),
		xpType: ''
	}
})

/*

CRUD

-CREATE
	POST: awardedXP, xpType, timeAwarded, lastEdited
-READ
	GET: id, awardedXP, xpType, timeAwarded, lastEdited
-UPDATE
	PUT: id, awardedXP, xpType, timeAwarded, lastEdited
-DELETE
	DELETE: id
	
*/