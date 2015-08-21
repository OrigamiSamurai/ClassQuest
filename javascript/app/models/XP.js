var XP = Backbone.Model.extend({
    defaults: {
        amount: 0,
        typeId: 1,
        encounterId: 0,
        created: new Date(),
        updated: new Date(),
    },

    validate: function(attr) {
		
        // return a value if there is a problem with an error message, otherwise, do nothing
        console.log("Validating attributes...", attr);
        if (!attr.typeId) {
			console.log("no type id");
            return "Invalid xp type id supplied.";
		}
	},

    urlRoot: 'http://www.kreutzlandry.com/classquest/api/xps'
});