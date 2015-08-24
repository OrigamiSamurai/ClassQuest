var Adventurer = Backbone.RelationalModel.extend({
	defaults: {
		firstName: '',
		lastName: '',
		login: '',
		password: '',
		questLicenses: [],
		guildMemberships: [],
		xps: [],
		loots: [],
		level: 1,
		currentXp: 0,
		createdDate: new Date(),
		updatedDate: new Date()
	},

	initialize: function() {
		_.bindAll(this, 'getXpTotal');

		this.bind('change:xps',this.getXpTotal);
	},

	relations: [
		{
			type: Backbone.HasMany,
			key: 'xps',
			relatedModel: 'Xp',
			includeInJSON: 'id',
			collectionType: 'XpCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'questLicenses',
			relatedModel: 'QuestLicense',
			includeInJSON: 'id',
			collectionType: 'QuestLicenseCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'guildMemberships',
			relatedModel: 'GuildMembership',
			includeInJSON: 'id',
			collectionType: 'GuildMembershipCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		},
		{
			type: Backbone.HasMany,
			key: 'loots',
			relatedModel: 'Loot',
			includeInJSON: 'id',
			collectionType: 'LootCollection',
			autoFetch: true,
			reverseRelation: {
				key: 'adventurer',
				includeInJSON: 'id'
			}
		}
	],

	getXpTotal: function() {
		var newXpTotal = 0;
    var xpAmounts = this.xps.pluck('amount');
    for (var i=0; i < xpAmounts.length; i++) {
      newXpTotal += xpAmounts[i];
    }

    this.currentXp = newXpTotal;
	},

  parse: function(response) {
      response.date = new Date(response.date);
      response.createdDate = new Date(response.createdDate);
      response.updatedDate = new Date(response.updatedDate);
      return response;
  },

  urlRoot: 'http://www.kreutzlandry.com/classquest/api/adventurers'
});