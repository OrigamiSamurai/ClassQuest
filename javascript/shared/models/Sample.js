CQ.Models.Sample = Backbone.RelationalModel.extend({
	defaults: {
		// attributes
		attribute: '',
		// related models
		relatedModel: null,
		relationships: [],
		// calculate attributes
		calculatedAttribute: 1,
	},

	initialize: function() {
		// bind all functions to 'this' unless specifically meant to run in foreign context
		_.bindAll(this, 'function1','eachOtherFunction...');

		// bind changes to calculated attribute's dependencies to go update calculated attributes
		this.bind('change:calculationDependency1',this.getCalculatedAttribute);
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'relationships',
			relatedModel: 'CQ.Models.Relationship',
			includeInJSON: 'id',
			collectionType: 'CQ.Collections.RelationshipCollection',
			//autoFetch: true,
			reverseRelation: {
				key: 'relationship',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasOne,
			key: 'relatedModel',
			relatedModel: 'CQ.Models.RelatedModel',
			includeInJSON: 'id',
			//autoFetch: true,
			reverseRelation: {
				key: 'reverseRelatedModel',
				includeInJSON: 'id'
			}
		},
	],

	// calculations for calculated attributes
	getCalculatedAttribute: function() {
		var resultOfCalculations;
		// Do some calculations
		calculatedAttribute = resultOfCalculcations;
    }

    // special parsing if necessary to adjust incoming data when creating/updating the model
    parse: function(response) {
      // Parse the response and edit it before including in the model.
      return response;
  	},

  	// API root address
  	urlRoot: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});