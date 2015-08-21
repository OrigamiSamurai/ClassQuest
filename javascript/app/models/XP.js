var Xp = Backbone.RelationalModel.extend({
    defaults: {
        amount: 0,
        typeId: 1,
        encounter: null,
        createdDate: new Date(),
        updatedDate: new Date(),
    },

    parse: function(response) {
        response.createdDate = new Date(response.createdDate);
        response.updatedDate = new Date(response.updatedDate);
        return response;
    },

    urlRoot: 'http://www.kreutzlandry.com/classquest/api/xps'
});