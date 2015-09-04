CQ.Models.Xp = Backbone.RelationalModel.extend({
    defaults: {
        amount: 0,
        encounter: null,
        adventurer: null,
        createdDate: new Date(),
        updatedDate: new Date(),
    },

    parse: function(response) {
        response.createdDate = new Date(response.createdDate);
        response.updatedDate = new Date(response.updatedDate);
        return response;
    },

    initialize: function(options) {
        this.attributes.createdDate = new Date(options.createdDate);
        this.attributes.updatedDate = new Date(options.updatedDate);
    },

    urlRoot: 'http://www.kreutzlandry.com/classquest/api/xps'
});