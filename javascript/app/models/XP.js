var XP = Backbone.Model.extend({
    defaults: {
        amount: 0,
        typeId: 1,
        encounterId: 0,
        created: null,
        updated: null,
    },

    //TODO: avoid 0s as defaults, or figure out better check for existance

    parse: function(response, xhr) {
        if (_.isObject(response.data)) {
            return response.data;
        }
        else {
            return response;
        }
    },

    validate: function(attr) {
		// return a value if there is a problem with an error message, otherwise, do nothing
        console.log("xp model validated");
        console.log("attr", attr);
        if (!attr.typeId) {
			console.log("no type id");
            return "Invalid xp type id supplied.";
		}
	},

    urlRoot: 'http://www.kreutzlandry.com/classquest/api/xps'
});